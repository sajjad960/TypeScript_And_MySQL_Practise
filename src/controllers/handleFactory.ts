import { NextFunction, Request, Response } from "express";
import AppError from "../utils/AppError";
import catchAsync from "../utils/catchAsync"

const createOne = (Model: any) => catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const doc: object = await Model.create(req.body);

        // send responce
        res.status(201).json({
            status: 'success',
            data: {
                data: doc,
            }
        })
});

const factory = {
    createOne
}
export  = factory;