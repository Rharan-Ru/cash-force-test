import { Request, Response } from "express";
import CustomError from "../error/CustomError";
import { CreateOrderService, GetOrderService, ListOrderService, RemoveOrderService, UpdateOrderService } from "../services/OrderService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListOrderService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    try {
        const buyer = await GetOrderService(id);
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
    const buyer = await CreateOrderService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    try {
        const buyer = await UpdateOrderService(id, payload);
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
        await RemoveOrderService(id);
        return res.status(200).json({ message: "ORDER_DELETED" });
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