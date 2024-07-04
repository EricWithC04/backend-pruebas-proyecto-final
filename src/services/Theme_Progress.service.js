import ThemeProgressTable from "../models/Theme_Progress.table.js";

export const getUserThemeProgress = async (idUser) => {
    const allThemeProgress = await ThemeProgressTable.findAll({
        attributes: ['themeId', 'complete'], 
        where: { progressId: idUser } 
    })
    return allThemeProgress
}

export const createThemeProgress = async (data) => {
    const newThemeProgress = await ThemeProgressTable.create(data)
    return newThemeProgress
}

export const updateThemeProgress = async (idProgress, idTheme, data) => {
    const updatedThemeProgress = await ThemeProgressTable.update(data, { where: { progressId: idProgress, themeId: idTheme } })
    return updatedThemeProgress
}

export const deleteThemeProgress = async (id) => {
    const deletedThemeProgress = await ThemeProgressTable.destroy({ where: { id } })
    return deletedThemeProgress
}