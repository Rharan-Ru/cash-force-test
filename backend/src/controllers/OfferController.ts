import { Request, Response } from "express";
import { CreateOfferService, GetOfferService, ListOfferService, RemoveOfferService, UpdateOfferService } from "../services/OfferService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListOfferService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetOfferService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateOfferService(payload);
    return res.status(201).json(buyer);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateOfferService(id, payload);
    return res.status(201).json(buyer);
};

const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveOfferService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}