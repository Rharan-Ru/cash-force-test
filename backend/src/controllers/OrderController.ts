import { Request, Response } from "express";
import { CreateOrderService, GetOrderService, ListOrderService, RemoveOrderService, UpdateOrderService } from "../services/OrderService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListOrderService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetOrderService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateOrderService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateOrderService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveOrderService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}