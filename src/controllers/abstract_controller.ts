import { Model } from "mongoose";
import models from '../models';
import EnumConstant from "../utils/enumConstant";
import { ClientError } from "../utils/http-errors";

type RootQuerySelector<T> = {
    [key: string]: any;
};
export type ApplyBasicQueryCasting<T> = T | T[] | (T extends (infer U)[] ? U : any) | any;
type Condition<T> = ApplyBasicQueryCasting<T>;
type _FilterQuery<T> = {
    [P in keyof T]?: Condition<T[P]>;
  } & RootQuerySelector<T>;
type FilterQuery<T> = _FilterQuery<T>;

interface IPopulate { 
    path: string,
    select?: string,
    populate?: IPopulate[],
    model? : any,
    options?: {},
    match? : {}
}

interface IQueryAll<T> {
    query?: FilterQuery<T>,
    limit?: any,
    page?: any,
    select?: string,
    populates?: IPopulate[],
    sort?: FilterQuery<T>,
}

interface IQueryOne<T> {
    query?: FilterQuery<T>,
    select?: string,
    populates?: IPopulate[],
}

export default abstract class AbstractController<T> {
    models = models;    
    private _model: Model<any>;
    constructor(model: Model<any>) {
        this._model = model;
    }
    private defaultQueryOne : IQueryOne<T> = {
        query : {},
        select : "-__v", 
        populates : []
    }
    private defaultQueryAll : IQueryAll<T> = {
        query : {},
        limit : 0,
        page : 1,
        select : "-__v -updatedAt -createdAt", 
        populates : [],
        sort : {_id: -1 }
    }

    async getMany(params: IQueryAll<T>): Promise<[T[], number]> {
        return await Promise.all([
            this.queryAll(params),
            this.countDocument(params.query)
        ]);
    }
    async getManyNoCount(params: IQueryAll<T>): Promise<T[]> { 
        return this.queryAll(params)
    }
    async countDocument(query: any = {}) {
        if (!query.status) {
            query.status = EnumConstant.ACTIVE;
        }
        return this._model.countDocuments(query);
    }
    private queryAll(_params: any) {
        let params: any = { ...this.defaultQueryAll, ..._params };
        if (!params.query.status) {
            params.query.status = EnumConstant.ACTIVE;
        }
        const skip = (Number(params.page) - 1) * Number(params.limit);
        var getData = this._model.find(params.query).sort(params.sort).skip(skip).limit(Number(params.limit));
        if (params.populates != undefined) {
            getData.populate(params.populates);
        }
        return getData.select(params.select);
    }
    
    async getOne(params: IQueryOne<T>) : Promise<T> {
        return this.queryOne(params);
    }
    private queryOne(_params: any) {
        let params: any = { ...this.defaultQueryOne, ..._params };
        if (!params.query.status) {
            params.query.status = EnumConstant.ACTIVE;
        }
        var getData = this._model.findOne(params.query);
        if (params.populates != undefined) {
            getData.populate(params.populates);
        }
        return getData.select(params.select);
    }

    public throwHttpError(message: string) {
        throw new ClientError(400, message); 
    }

    public checkThrowNotFound(object: any, message: string = "") {
        if (!object) {
            let title = message == "" ? this._model.collection.name : message;
            throw new ClientError(404, title + " not found.");
        }
        return object;
    }
    public checkThrowAlreadyExist(object: any, message: string = "") {
        if (object) {
            let title = message == "" ? this._model.collection.name : message;
            if (object.exist == null) {
                throw new ClientError(403, title + " already exists.");
            }
            if (object.exist) {
                throw new ClientError(403, title + " already exists.");
            }           
        }
        return object;
    }

    public skipLimit(req: any): [number, number] {
        let skip: number = (Number(req.query.page) - 1) * Number(req.query.limit);
        if (skip < 0)
            skip = 0;
        
        return [skip, Number(req.query.limit)];
    }

    public facetAggregate(params: { skip: number, limit: number }) {
        return {
            $facet: {
                result: [
                    { $skip: params.skip },
                    ...(params.limit > 0 ? [{ $limit: params.limit }] : [])
                ],
                totalCount: [
                    {
                        $count: 'count'
                    }
                ]
            }
        }
    }
    public async facetData(data: any, populates: any[] = []): Promise<[any[], number]> {
        let documentCount = 0;
        if (data[0].totalCount) {
            if (data[0].totalCount.length > 0) {
                documentCount = data[0].totalCount[0].count;
            }
        } else {
            return [data, data.length];
        }
        data = data[0].result;
        if (data.length > 0) {
            if (populates.length > 0) {
                await this._model.populate(data, populates);
            }
            return [data, documentCount]
        }
        return [[], documentCount];
    }

    async checkNameExist(param: { req?: any, query?: any }) {
        let query: any = {}
        if (param.req) {
            if (param.req.body._user) {
                if (param.req.body._user.schools) {
                    query.schools = param.req.body._user.schools;
                }
            }
            query.name = param.req.query.name != null ? param.req.query.name : param.req.body.name;
            if (param.req.query._id || param.req.params._id) {
                let id = param.req.query._id != null ? param.req.query._id : param.req.params._id
                query._id = { $ne: id };
            }
        } else {
            query = param.query;
        }
        if (!query.status) {
            query.status = EnumConstant.ACTIVE;
        }
        const exist = await this._model.findOne(query).collation({ locale: "en", strength: 2 });
        const isExisted = exist != null ? true : false;
        return { exist: isExisted, model: this._model.collection.name};
    }
}