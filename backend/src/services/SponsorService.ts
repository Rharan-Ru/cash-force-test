import CustomError from "../error/CustomError";
import Sponsor, { SponsorInput, SponsorOuput } from "../models/Sponsors";

const ListSponsorService = async (): Promise<Sponsor[]> => {
    const sponsors = await Sponsor.findAll();
    return sponsors
};

const GetSponsorService = async (id: string | number): Promise<Sponsor> => {
    const sponsor = await Sponsor.findByPk(id)
    if (!sponsor) throw new CustomError("Sponsor not find", 404)
    return sponsor
};

const CreateSponsorService = async (payload: SponsorInput): Promise<SponsorOuput> => {
    const sponsor = await Sponsor.create(payload)
    return sponsor
};

const UpdateSponsorService = async (id: string | number, payload: SponsorInput): Promise<SponsorOuput> => {
    const sponsor = await GetSponsorService(id)
    await sponsor.update(payload)
    return sponsor
};


const RemoveSponsorService = async (id: string | number): Promise<void> => {
    const sponsor = await GetSponsorService(id)
    return await sponsor.destroy()
};

export {
    ListSponsorService,
    GetSponsorService,
    CreateSponsorService,
    UpdateSponsorService,
    RemoveSponsorService
}