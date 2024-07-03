import * as UnitProgressService from '../services/Unit_Progress.service.js'

export const createUnitProgress = async (req, res) => {
    try {
        const newUnitProgress = await UnitProgressService.createUnitProgress(req.body)

        if (!newUnitProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el progreso!'
            })
        }

        return res.status(201).send({ msg: 'Progreso creado correctamente', newUnitProgress })
    } catch (err) {
        console.error(err);
    }
}

export const updateUnitProgress = async (req, res) => {
    try {
        const { idUser, idUnit } = req.params

        const updatedUnitProgress = await UnitProgressService.updateUnitProgress(idUser, idUnit, req.body)

        if (!updatedUnitProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el progreso!'
            })
        }

        return res.status(200).send({ msg: 'Progreso actualizado correctamente', updatedUnitProgress })
    } catch (err) {
        console.error(err);
    }
}

export const deleteUnitProgress = async (req, res) => {
    try {
        const { id } = req.params

        const deletedUnitProgress = await UnitProgressService.deleteUnitProgress(id)

        if (!deletedUnitProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el progreso!'
            })
        }

        return res.status(200).send({ msg: 'Progreso eliminado correctamente', deletedUnitProgress })
    } catch (err) {
        console.error(err);
    }
}