import OptionModel from "../models/Options.model";

export const getAllOptions = async () => {
    const options = await OptionModel.findAll();
    return options;
}

export const getOneOption = async (id) => {
    const option = await OptionModel.findByPk(id);
    return option;
}