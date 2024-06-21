import UnitModel from "../models/Unit.model.js";
import ThemeModel from "../models/Theme.model.js";

export const findAllUnits = async () => {
    const allUnits = await UnitModel.findAll({
        include: {
            model: ThemeModel,
            attributes: ["id", "name", "description"],
        },
    })
    return allUnits
}

export const getUnitById = async (id) => {
    const oneUnit = await UnitModel.findByPk(id);
    return oneUnit;
}

export const createUnitModel = async (data) => {
    const newUnit = await UnitModel.create(data)
    return newUnit
}

export const updateUnitModel = async (id, data) => {
    const updatedUnit = await UnitModel.updateByIdAndUpdate(id, data)
    return updatedUnit
}

export const deleteUnitModel = async (id) => {
    const deletedUnit = await UnitModel.findByIdAndRemove(id)
    return deletedUnit
}