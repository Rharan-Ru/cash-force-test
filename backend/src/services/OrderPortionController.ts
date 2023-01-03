import CustomError from "../error/CustomError";
import OrderPortion, { OrderPortionInput, OrderPortionOuput } from "../models/OrderPortions";

const ListOrderPortionService = async (): Promise<OrderPortion[]> => {
    const orderPortions = await OrderPortion.findAll();
    return orderPortions
};

const GetOrderPortionService = async (id: string | number): Promise<OrderPortion> => {
    const orderPortion = await OrderPortion.findByPk(id)
    if (!orderPortion) throw new CustomError("OrderPortion not find", 404)
    return orderPortion
};

const CreateOrderPortionService = async (payload: OrderPortionInput): Promise<OrderPortionOuput> => {
    const orderPortion = await OrderPortion.create(payload)
    return orderPortion
};

const UpdateOrderPortionService = async (id: string | number, payload: OrderPortionInput): Promise<OrderPortionOuput> => {
    const orderPortion = await GetOrderPortionService(id)
    await orderPortion.update(payload)
    return orderPortion
};


const RemoveOrderPortionService = async (id: string | number): Promise<void> => {
    const orderPortion = await GetOrderPortionService(id)
    await orderPortion.destroy()
    return
};

export {
    ListOrderPortionService,
    GetOrderPortionService,
    CreateOrderPortionService,
    UpdateOrderPortionService,
    RemoveOrderPortionService
}