import { Request, Response } from "express";
import CustomError from "../error/CustomError";
import { CreateOfferService, GetOfferService, ListOfferService, RemoveOfferService, UpdateOfferService } from "../services/OfferService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListOfferService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    try {
        const buyer = await GetOfferService(id);
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
    const buyer = await CreateOfferService(payload);
    return res.status(201).json(buyer);
};

const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    try {
        const buyer = await UpdateOfferService(id, payload);
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
        await RemoveOfferService(id);
        return res.status(200).json({ message: "OFFER_DELETED" });
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