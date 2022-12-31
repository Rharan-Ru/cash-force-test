import { Request, Response } from "express";
import { CreateSponsorService, GetSponsorService, ListSponsorService, RemoveSponsorService, UpdateSponsorService } from "../services/SponsorService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListSponsorService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetSponsorService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateSponsorService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateSponsorService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveSponsorService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}