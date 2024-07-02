import * as ExerciseProgressService from '../services/Exercise_Progress.service.js'

export const createExerciseProgress = async (req, res) => {
    try {
        const newExerciseProgress = await ExerciseProgressService.createExerciseProgress(req.body)

        if (!newExerciseProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el progreso!'
            })
        }

        return res.status(201).send({ msg: 'Progreso creado correctamente', newExerciseProgress })
    } catch (err) {
        console.error(err);
    }
}

export const updateExerciseProgress = async (req, res) => {
    try {
        const { id } = req.params

        const updatedExerciseProgress = await ExerciseProgressService.updateExerciseProgress(id, req.body)

        if (!updatedExerciseProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el progreso!'
            })
        }

        return res.status(200).send({ msg: 'Progreso actualizado correctamente', updatedExerciseProgress })
    } catch (err) {
        console.error(err);
    }
}

export const deleteExerciseProgress = async (req, res) => {
    try {
        const { id } = req.params

        const deletedExerciseProgress = await ExerciseProgressService.deleteExerciseProgress(id)

        if (!deletedExerciseProgress) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el progreso!'
            })
        }

        return res.status(200).send({ msg: 'Progreso eliminado correctamente', deletedExerciseProgress })
    } catch (err) {
        console.error(err);
    }
}