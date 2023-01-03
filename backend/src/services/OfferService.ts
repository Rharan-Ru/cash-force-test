import CustomError from "../error/CustomError";
import Offer, { OfferInput, OfferOuput } from "../models/Offers";

const ListOfferService = async (): Promise<Offer[]> => {
    const offers = await Offer.findAll();
    return offers
};

const GetOfferService = async (id: string | number): Promise<Offer> => {
    const offer = await Offer.findByPk(id)
    if (!offer) throw new CustomError("Offer not find", 404)
    return offer
};

const CreateOfferService = async (payload: OfferInput): Promise<OfferOuput> => {
    const offer = await Offer.create(payload)
    return offer
};

const UpdateOfferService = async (id: string | number, payload: OfferInput): Promise<OfferOuput> => {
    const offer = await GetOfferService(id)
    await offer.update(payload)
    return offer
};


const RemoveOfferService = async (id: string | number): Promise<void> => {
    const offer = await GetOfferService(id)
    await offer.destroy()
    return
};

export {
    ListOfferService,
    GetOfferService,
    CreateOfferService,
    UpdateOfferService,
    RemoveOfferService
}