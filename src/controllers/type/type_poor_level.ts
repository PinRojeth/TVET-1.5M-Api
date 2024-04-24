import { Model } from 'mongoose';
import { IType_poverty_status, } from '../../models';

import AbstractController from './../abstract_controller';

export default class SubjectController extends AbstractController<IType_poverty_status> {
    model: Model<IType_poverty_status>;
    constructor(model: Model<IType_poverty_status>) {
        super(model);
        this.model = model;
    }


}