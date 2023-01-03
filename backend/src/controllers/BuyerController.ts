import { Request, Response } from "express";
import CustomError from "../error/CustomError";
import { CreateBuyerService, GetBuyerService, ListBuyerService, RemoveBuyerService, UpdateBuyerService } from '../services/BuyerService'

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListBuyerService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    try {
        const buyer = await GetBuyerService(id);
        return res.status(200).json(buyer);
    } catch (e: unknown) {
        if (e instanceof CustomError) {
            return res.status(e.statusCode).json({message: e.message});
        }
        return res.status(404);
    }
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateBuyerService(payload);
    return res.status(201).json(buyer);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const { id } = req.params
    try {
        const buyer = await UpdateBuyerService(id, payload);
        return res.status(201).json(buyer);
    } catch (e: unknown) {
        if (e instanceof CustomError) {
            return res.status(e.statusCode).json({message: e.message});
        }
        return res.status(404);
    }
};

const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    try {
        await RemoveBuyerService(id);
        return res.status(200).json({ message: "BUYER_DELETED" });
    } catch (e: unknown) {
        if (e instanceof CustomError) {
            return res.status(e.statusCode).json({message: e.message});
        }
        return res.status(404);
    }
};

export = {
    index,
    details,
    create,
    update,
    remove
}