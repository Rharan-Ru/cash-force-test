import CustomError from "../error/CustomError";
import CNPJ, { CNPJInput, CNPJOuput } from "../models/CNPJs";

const ListCNPJService = async (): Promise<CNPJ[]> => {
    const cnpjs = await CNPJ.findAll();
    return cnpjs
};

const GetCNPJService = async (id: string | number): Promise<CNPJ> => {
    const cnpj = await CNPJ.findByPk(id)
    if (!cnpj) throw new CustomError("CNPJ not find", 404)
    return cnpj
};

const CreateCNPJService = async (payload: CNPJInput): Promise<CNPJOuput> => {
    const cnpj = await CNPJ.create(payload)
    return cnpj
};

const UpdateCNPJService = async (id: string | number, payload: CNPJInput): Promise<CNPJOuput> => {
    const cnpj = await GetCNPJService(id)
    await cnpj.update(payload)
    return cnpj
};


const RemoveCNPJService = async (id: string | number): Promise<void> => {
    const cnpj = await GetCNPJService(id)
    await cnpj.destroy()
    return
};

export {
    ListCNPJService,
    GetCNPJService,
    CreateCNPJService,
    UpdateCNPJService,
    RemoveCNPJService
}