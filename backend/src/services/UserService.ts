import CustomError from "../error/CustomError";
import User, { UserInput, UserOuput } from "../models/Users";

const ListUserService = async (): Promise<User[]> => {
    const users = await User.findAll();
    return users
};

const GetUserService = async (id: string | number): Promise<User> => {
    const user = await User.findByPk(id)
    if (!user) throw new CustomError("User not find", 404)
    return user
};

const CreateUserService = async (payload: UserInput): Promise<UserOuput> => {
    const user = await User.create(payload)
    return user
};

const UpdateUserService = async (id: string | number, payload: UserInput): Promise<UserOuput> => {
    const user = await GetUserService(id)
    await user.update(payload)
    return user
};


const RemoveUserService = async (id: string | number): Promise<void> => {
    const user = await GetUserService(id)
    return await user.destroy()
};

export {
    ListUserService,
    GetUserService,
    CreateUserService,
    UpdateUserService,
    RemoveUserService
}