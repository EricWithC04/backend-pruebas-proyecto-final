import ThemeModel from "../models/Theme.model.js";
import ExerciseModel from "../models/Exercise.model.js";

export const findAllThemes = async () => {
    const allThemes = await ThemeModel.findAll({
        include: {
            model: ExerciseModel,
            attributes: ["name", "description", "code", "id"],
        }
    })
    return allThemes
}

export const getThemeById = async (id) => {
    const oneTheme = await ThemeModel.findByPk(id, {
        include: {
            model: ExerciseModel,
            attributes: ["name", "description", "code", "id"],
        }
    });
    return oneTheme;
}

export const createThemeModel = async (data) => {
    const newTheme = await ThemeModel.create(data)
    return newTheme
}

export const updateThemeModel = async (id, data) => {
    const updatedTheme = await ThemeModel.updateByIdAndUpdate(id, data)
    return updatedTheme
}

export const deleteThemeModel = async (id) => {
    const deletedTheme = await ThemeModel.findByIdAndRemove(id)
    return deletedTheme
}