import { Model } from 'mongoose';
import AbstractController from './abstract_controller';
import { IUsers, createSession} from '../models';
import controllers from '.';
import EnumConstant, { Role } from '../utils/enumConstant';
import bcrypt from 'bcrypt'
import TokenGenerator from '../utils/token-generator';

export default class UserController extends AbstractController<IUsers> {
    model: Model<IUsers>;
    constructor(model: Model<IUsers>) {
        super(model);
        this.model = model;
    }
    
    async changePassword(req: any) {
        let { old_password, new_password } = req.body;
        await this.verifyPassword(req.body._user.users, old_password);
        let pwd = await this.hashPassword(new_password);
        let data = await this.model.findByIdAndUpdate(req.body._user.users, { $set: { password: pwd } }, { new: true });
        return { message:"success" };
    }

    async checkUsername(username: string) {
        const user = await this.model.findOne({ $or: [{ email: username },{telephone: username}, {username: username}]});
        const isExisted = user != null ? true : false;
        return { exist: isExisted };
    }

    private async verifyPassword (_id: string, password: string = "") {
        const acc = await this.model.findOne({ _id: _id });
        this.checkThrowNotFound(acc);
        if (acc!.password) {
            const isMatched = await bcrypt.compare(password, acc!.password);
            if (!isMatched) {
                this.throwHttpError("incorrect old password.");
            }
        }
        return true;
    }

    async validateUsername(username: string, email: string = "") {
        let query: any = {
            username: username
        }
        if (email != "") {
            query = {$or :  [{ username: username }, { email: email}]}
        }
        const checkUsername = await this.model.findOne(query).collation({ locale: "en", strength: 2 });
        this.checkThrowAlreadyExist(checkUsername, "username");
    }

    async hashPassword (password: string): Promise<string> {
        return bcrypt.hash(password, bcrypt.genSaltSync(10));
    }

    async logout(req: any) {
        const refreshToken = req.headers.authorization?.split(' ')[1] as string;
        if (TokenGenerator.isValidToken(refreshToken)) {
            controllers.userToken.deleteOneByToken(refreshToken);
            return { message: "success" };
        } 
        return { message: "invalid token"}
    }

    async resetStaffPassword(req: any) {
        const { staffs, new_password } = req.body;
        if (String(staffs) == String(req.body._user._id)) {
            controllers.staff.throwHttpError("failed to reset to your own password.");
        }
        let query: any = {
            _id: staffs,
            status: {$ne: EnumConstant.DELETE}
        }
        if (req.body._user.schools) {
            query.schools = req.body._user.schools;
        }
        const getStaff = await controllers.staff.getOne({
            query: query,
        });
        controllers.staff.checkThrowNotFound(getStaff);
        const new_password_hash = await this.hashPassword(new_password);
        await this.model.findOneAndUpdate({ staffs: getStaff._id }, { $set: { password: new_password_hash } }, { new: true });
        return { message: "password reset"}
    }

    async resetStudentPassword(req: any) {
        const { students, new_password } = req.body;
        let query: any = {
            _id: students,
            status: { $ne: EnumConstant.DELETE },
            users: {$ne: null}
        }
        if (req.body._user.schools) {
            query.schools = req.body._user.schools;
        }
        const getStudent = await controllers.student.getOne({
            query:query
        })
        controllers.student.checkThrowNotFound(getStudent); 
        const new_password_hash = await this.hashPassword(new_password);
        let data = await this.model.findOneAndUpdate({ students: getStudent._id }, { $set: { password: new_password_hash } }, { new: true });
        controllers.student.checkThrowNotFound(data); 
        return { message: "password reset"}
    }

    async addStudentUsername(req: any) {
        let { username, password, students } = req.body;
        username = username.toLowerCase();
        const [getStudent, validateUsername] = await Promise.all([
            controllers.student.getOne({
                query: {
                    _id: students,
                    status: { $ne: EnumConstant.DELETE },
                    users: null,
                }
            }),
            this.validateUsername(username)
        ]) 
        controllers.student.checkThrowNotFound(getStudent);
        return createSession(async (session) => {
            let user = await this.createUserModel({ roles: Role.student._id, username, password });
            user.students = getStudent._id;
            await this.models.user.create([user], { session: session });
            return await this.models.student.findOneAndUpdate({ _id: getStudent._id }, { $set: { users: user._id } }, { session: session, new: true }); 
        });
    }

    async createUserModel(params: { username: string, password: string, roles: number, staffs?: any}): Promise<IUsers> {
        let data = new this.model(params);
        data.password = await this.hashPassword(params.password);
        return data;
    }
}