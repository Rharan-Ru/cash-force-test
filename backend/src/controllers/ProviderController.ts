import { Request, Response } from "express";
import { CreateProviderService, GetProviderService, ListProviderService, RemoveProviderService, UpdateProviderService } from "../services/ProviderService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListProviderService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetProviderService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateProviderService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateProviderService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveProviderService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}