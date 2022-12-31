import { Request, Response } from "express";
import { CreateUserService, GetUserService, ListUserService, RemoveUserService, UpdateUserService } from "../services/UserService";

const index = async (req: Request, res: Response): Promise<Response> => {
    const buyers = await ListUserService();
    return res.status(200).json(buyers);
};

const details = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const buyer = await GetUserService(id);
    return res.status(200).json(buyer);
};

const create = async (req: Request, res: Response): Promise<Response> => {
    const payload = req.body
    const buyer = await CreateUserService(payload);
    return res.status(201).json(buyer);
};


const update = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const payload = req.body
    const buyer = await UpdateUserService(id, payload);
    return res.status(201).json(buyer);
};


const remove = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    await RemoveUserService(id);
    return res.status(200);
};

export = {
    index,
    details,
    create,
    update,
    remove
}