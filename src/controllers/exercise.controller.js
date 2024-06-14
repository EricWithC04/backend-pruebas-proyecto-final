import * as ExerciseService from '../services/Exercise.service.js'

export const getAllExercises = async (req, res) => {
    try {
        const exercises = await ExerciseService.getAllExercises();

        if (!exercises.length) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado ejercicios!'
            })
        }

        res.status(200).send(exercises);
    } catch (err) {
        console.error(err);
    }
}
export const getOneExercise = async (req, res) => {
    try {
        const { id } = req.params;

        const exercise = await ExerciseService.getExerciseById(id);

        if (!exercise) {
            res.status(404).send({
                status: 404,
                message: 'No se ha encontrado el Ejercicio!'
            })
        }

        res.status(200).send(exercise);
    } catch (err) {
        console.error(err);
    }
}
export const createExercise = async (req, res) => {
    try {
        const newExercise = await ExerciseService.createExerciseModel(req.body);

        if (!newExercise) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear la Unidad!'
            })
        }

        res.status(201).send({ msg: 'Unidad Creada Correctamente', newExercise });
    } catch (err) {
        console.error(err);
    }
}
export const updateExercise = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedExercise = await ExerciseService.updateExerciseModel(id, req.body);

        if (!updatedExercise) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el Ejercicio!'
            })
        }

        res.status(200).send({ msg: 'Ejercicio actualizado correctamente', updatedExercise });
    } catch (err) {
        console.error(err);
    }
}
export const deleteExercise = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedExercise = await ExerciseService.deleteExercise(id);

        if (!deletedExercise) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el Ejercicio!'
            })
        }

        res.status(200).send({ msg: 'Ejercicio eliminado correctamente', deletedExercise });
    } catch (err) {
        console.error(err);
    }
}