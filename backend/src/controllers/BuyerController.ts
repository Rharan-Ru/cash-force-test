import { Request, Response } from "express";
import { CreateBuyerService, GetBuyerService, ListBuyerService, RemoveBuyerService, UpdateBuyerService } from '../services/BuyerService'

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListBuyerService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetBuyerService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateBuyerService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const { id } = req.params
    const buyer = await UpdateBuyerService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveBuyerService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}