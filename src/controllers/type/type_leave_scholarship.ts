import { Model } from 'mongoose';
import { IType_leave_scholarships, } from '../../models';

import AbstractController from '../abstract_controller';

export default class SubjectController extends AbstractController<IType_leave_scholarships> {
    model: Model<IType_leave_scholarships>;
    constructor(model: Model<IType_leave_scholarships>) {
        super(model);
        this.model = model;
    }

    async getList(req: any) {
        return this.getManyNoCount({
            query: {},
            sort:{_id: 1}
        })
    }

    readonly status = {
        GRADUATE: 1,
        DEAD: 2,
        PERSONAL_LEAVE: 3,
        FAKE_DOCUMENT: 4,
        SUPPEND:5,
        NOT_ENOUGH_DOCUMENT: 6,
    }

}