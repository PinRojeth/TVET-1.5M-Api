export abstract class HTTPClientError extends Error {
    readonly name!: string;
    statusCode!: number;
    headerStatus !: number;
    errorCode!: number;
    constructor(message: object | string) {
        if (message instanceof Object) {
            super(JSON.stringify(message));
        } else {
            super(message);
        }
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ServerError extends Error {
    readonly statusCode = 500;
    constructor(message: string) {
        super(message);
    } 
}

export class ClientError extends HTTPClientError{
    constructor(headerCode: number, message: string) {
        super(message);
        this.errorCode = headerCode;
        this.headerStatus = headerCode;
        this.statusCode = headerCode;
    }
}