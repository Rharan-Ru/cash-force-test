import { Request, Response } from "express";
import { CreateCNPJService, GetCNPJService, ListCNPJService, RemoveCNPJService, UpdateCNPJService } from "../services/CNPJService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListCNPJService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetCNPJService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateCNPJService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateCNPJService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveCNPJService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}