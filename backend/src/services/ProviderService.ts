import CustomError from "../error/CustomError";
import Provider, { ProviderInput, ProviderOuput } from "../models/Providers";

const ListProviderService = async (): Promise<Provider[]> => {
    const providers = await Provider.findAll();
    return providers
};

const GetProviderService = async (id: string | number): Promise<Provider> => {
    const provider = await Provider.findByPk(id)
    if (!provider) throw new CustomError("Provider not find", 404)
    return provider
};

const CreateProviderService = async (payload: ProviderInput): Promise<ProviderOuput> => {
    const provider = await Provider.create(payload)
    return provider
};

const UpdateProviderService = async (id: string | number, payload: ProviderInput): Promise<ProviderOuput> => {
    const provider = await GetProviderService(id)
    await provider.update(payload)
    return provider
};


const RemoveProviderService = async (id: string | number): Promise<void> => {
    const provider = await GetProviderService(id)
    await provider.destroy()
    return
};

export {
    ListProviderService,
    GetProviderService,
    CreateProviderService,
    UpdateProviderService,
    RemoveProviderService
}