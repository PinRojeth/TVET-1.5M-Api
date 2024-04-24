import { Strategy as JwtStrategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { Strategy as LocalStrategy } from 'passport-local';
import dotenv from 'dotenv';
import passport from 'passport';
import bcrypt from 'bcrypt';
import EnumConstant from './enumConstant';
import controllers from '../controllers';
import { ClientError } from './http-errors';
import models from '../models';


dotenv.config();
const jwt_opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secret
}

passport.use(new LocalStrategy({ usernameField: "username", passReqToCallback: true }, async (req, username, password, done) => {
    let query: any = {
        $or: [
            { username: username },
            { email: username },
            { google_id: username },
            { facebook_id: username }
        ],
        status: { $ne: EnumConstant.DELETE }
    }
    const account = await models.user.findOne(query).populate([
        { path: "roles" },
        { path: "staffs" },
        { path: "students" },
    ]).collation({ locale: 'en', strength: 2 });
    if (!account) {
        return done(new ClientError(404, "User not found."), false);    
    }
    if (!account.students && !account.staffs) {
        return done(new ClientError(404, "User not found."), false);    
    }
    if (account.status != EnumConstant.ACTIVE) {
        return done(new ClientError(400, "User has been removed or blocked."), false);
    }
    if (!account.password) {
        return done(new ClientError(400,"Incorrect password."), false);
    }
    const isMatched = await bcrypt.compare(password, account.password);
    if (!isMatched) {
        return done(new ClientError(400, "Incorrect password."), false);
    }
    return done(null, account);
}));

passport.use(new JwtStrategy(jwt_opts, async (jwt_payload: any, done: VerifiedCallback) => {
    try {
        const user = await controllers.user.getOne({
            query: { _id: jwt_payload.id , status: {$ne : EnumConstant.DELETE} },
            populates: [
                { path: "roles", select: "permissions"},
                { path: "staffs"},
                { path: "students"},
            ]
        });
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (err) {
        return done(err, false);
    }
}));
