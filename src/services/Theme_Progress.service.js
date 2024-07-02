import ThemeProgressTable from "../models/Theme_Progress.table.js";

export const createThemeProgress = async (data) => {
    const newThemeProgress = await ThemeProgressTable.create(data)
    return newThemeProgress
}

export const updateThemeProgress = async (id, data) => {
    const updatedThemeProgress = await ThemeProgressTable.update(data, { where: { id } })
    return updatedThemeProgress
}

export const deleteThemeProgress = async (id) => {
    const deletedThemeProgress = await ThemeProgressTable.destroy({ where: { id } })
    return deletedThemeProgress
}