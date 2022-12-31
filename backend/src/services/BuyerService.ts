import CustomError from "../error/CustomError";
import Buyer, { BuyerInput, BuyerOuput } from "../models/Buyers";
import CNPJ from "../models/CNPJs";

const ListBuyerService = async (): Promise<Buyer[]> => {
    const buyers = await Buyer.findAll({
        include: [
            { model: CNPJ, as: 'cnpj' }
        ]
    });
    return buyers
};

const GetBuyerService = async (id: string | number): Promise<Buyer> => {
    const buyer = await Buyer.findByPk(id)
    if (!buyer) throw new CustomError("Buyer not find", 404)
    return buyer
};

const CreateBuyerService = async (payload: BuyerInput): Promise<BuyerOuput> => {
    const buyer = await Buyer.create(payload)
    return buyer
};

const UpdateBuyerService = async (id: string | number, payload: BuyerInput): Promise<BuyerOuput> => {
    const buyer = await GetBuyerService(id)
    await buyer.update(payload)
    return buyer
};


const RemoveBuyerService = async (id: string | number): Promise<void> => {
    const buyer = await GetBuyerService(id)
    return await buyer.destroy()
};

export {
    ListBuyerService,
    GetBuyerService,
    CreateBuyerService,
    UpdateBuyerService,
    RemoveBuyerService
}