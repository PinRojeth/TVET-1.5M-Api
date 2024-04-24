import { Model } from 'mongoose';
import { IType_poverty_status, IType_scholarship_documents, } from '../../models';

import AbstractController from '../abstract_controller';

export default class Controllers extends AbstractController<IType_scholarship_documents> {
    model: Model<IType_scholarship_documents>;
    constructor(model: Model<IType_scholarship_documents>) {
        super(model);
        this.model = model;
    }


}