import ThemeModel from "../models/Theme.model";

export const findThemesModel = async () => {
    const allThemes = await ThemeModel.find()
    return allThemes
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