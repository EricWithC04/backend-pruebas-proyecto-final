import * as ObservationService from '../services/Observations.service.js'

export const createObservation = async (req, res) => {
    try {
        const newObservation = await ObservationService.createObservation(req.body)

        if (!newObservation) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear la observación!'
            })
        }

        return res.status(201).send({ msg: 'Observación creada correctamente', newObservation })
    } catch (err) {
        console.error(err);
    }
}

export const updateObservation = async (req, res) => {
    try {
        const { id } = req.params

        const updatedObservation = await ObservationService.updateObservation(id, req.body)

        if (!updatedObservation) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar la observación!'
            })
        }

        return res.status(200).send({ msg: 'Observación actualizada correctamente', updatedObservation })
    } catch (err) {
        console.error(err);
    }
}

export const deleteObservation = async (req, res) => {
    try {
        const { id } = req.params

        const deletedObservation = await ObservationService.deleteObservation(id)

        if (!deletedObservation) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar la observación!'
            })
        }

        return res.status(200).send({ msg: 'Observación eliminada correctamente', deletedObservation })
    } catch (err) {
        console.error(err);
    }
}