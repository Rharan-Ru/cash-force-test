import CustomError from "../error/CustomError";
import Buyer from "../models/Buyers";
import CNPJ from "../models/CNPJs";
import Order, { OrderInput, OrderOuput } from "../models/Orders";
import Provider from "../models/Providers";
import User from "../models/Users";

const ListOrderService = async (): Promise<Order[]> => {
    const orders = await Order.findAll({
        include: [
            { model: CNPJ, as: 'cnpj' },
            { model: User, as: 'user' },
            { model: Buyer, as: 'buyer' },
            { model: Provider, as: 'provider'}
        ]
    });
    return orders
};

const GetOrderService = async (id: string | number): Promise<Order> => {
    const order = await Order.findByPk(id)
    if (!order) throw new CustomError("Order not find", 404)
    return order
};

const CreateOrderService = async (payload: OrderInput): Promise<OrderOuput> => {
    const order = await Order.create(payload)
    return order
};

const UpdateOrderService = async (id: string | number, payload: OrderInput): Promise<OrderOuput> => {
    const order = await GetOrderService(id)
    await order.update(payload)
    return order
};


const RemoveOrderService = async (id: string | number): Promise<void> => {
    const order = await GetOrderService(id)
    return await order.destroy()
};

export {
    ListOrderService,
    GetOrderService,
    CreateOrderService,
    UpdateOrderService,
    RemoveOrderService
}