import { Model } from 'mongoose';
import AbstractController from './abstract_controller';
import { ILink_class_courses } from '../models/link_class_courses';

export default class Controller extends AbstractController<ILink_class_courses> {
    model: Model<ILink_class_courses>;
    constructor(model: Model<ILink_class_courses>) {
        super(model);
        this.model = model;
    }

}