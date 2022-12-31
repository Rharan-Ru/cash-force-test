import { Request, Response } from "express";
import { CreateOrderPortionService, GetOrderPortionService, ListOrderPortionService, RemoveOrderPortionService, UpdateOrderPortionService } from "../services/OrderPortionController";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListOrderPortionService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetOrderPortionService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateOrderPortionService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateOrderPortionService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveOrderPortionService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}