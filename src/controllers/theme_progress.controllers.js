import * as ThemeProgressService from '../services/Theme_Progress.service.js'

export const createThemeProgress = async (req, res) => {
    try {
        const newThemeProgress = await ThemeProgressService.createThemeProgress(req.body)

        if (!newThemeProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el progreso!'
            })
        }

        return res.status(201).send({ msg: 'Progreso creado correctamente', newThemeProgress })
    } catch (err) {
        console.error(err);
    }
}

export const updateThemeProgress = async (req, res) => {
    try {
        const { id } = req.params

        const updatedThemeProgress = await ThemeProgressService.updateThemeProgress(id, req.body)

        if (!updatedThemeProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el progreso!'
            })
        }

        return res.status(200).send({ msg: 'Progreso actualizado correctamente', updatedThemeProgress })
    } catch (err) {
        console.error(err);
    }
}

export const deleteThemeProgress = async (req, res) => {
    try {
        const { id } = req.params

        const deletedThemeProgress = await ThemeProgressService.deleteThemeProgress(id)

        if (!deletedThemeProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el progreso!'
            })
        }

        return res.status(200).send({ msg: 'Progreso eliminado correctamente', deletedThemeProgress })
    } catch (err) {
        console.error(err);
    }
}