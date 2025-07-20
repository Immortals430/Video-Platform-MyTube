import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export class ApplicationError extends Error{
    code;
    constructor(message : string, code : number){
        super(message)
        this.code = code
    }
}

const errorhandler = (err: ErrorRequestHandler, req : Request, res : Response, next : NextFunction) => {
    if(err instanceof ApplicationError){
        return res.status(err.code).json({ message: err.message})
    }

    res.status(500).json({ message: "Something went wrong" })
}

export default errorhandler