import UserModel from "../models/User.model.js";
import ProgressModel from "../models/Progress.model.js";
import UnitProgressTable from "../models/Unit_Progress.table.js";
import UnitModel from "../models/Unit.model.js";

export const getAllUsers = async () => {
    const users = await UserModel.findAll();
    return users;
}

export const getUserById = async (id) => {
    const user = await UserModel.findByPk(id, 
        { 
            attributes: { exclude: ['password', 'level', 'createdAt', 'updatedAt', 'progressId'] },
            include: {
                model: ProgressModel,
                attributes: ['id'],
                include: {
                    model: UnitModel,
                    attributes: ['id'],
                    through: {
                        model: UnitProgressTable,
                        attributes: ['complete']
                    }
                }
            }
        }
    );
    return user;
}

export const createUser = async (data) => {
    const user = await UserModel.create(data);
    return user;
}

export const updateUser = async (id, data) => {
    const user = await UserModel.update(data, { where: { id } });
    return user;
}

export const deleteUser = async (id) => {
    const user = await UserModel.destroy({ where: { id } });
    return user;
}