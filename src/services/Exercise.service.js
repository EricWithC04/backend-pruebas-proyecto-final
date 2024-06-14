import ExerciseModel from "../models/Exercise.model";

export const findExercisesModel = async () => {
    const allExercises = await ExerciseModel.find()
    return allExercises
}

export const createExerciseModel = async (data) => {
    const newExercise = await ExerciseModel.create(data)
    return newExercise
}

export const updateExerciseModel = async (id, data) => {
    const updatedExercise = await ExerciseModel.updateByIdAndUpdate(id, data)
    return updatedExercise
}

export const deleteExerciseModel = async (id) => {
    const deletedExercise = await ExerciseModel.findByIdAndRemove(id)
    return deletedExercise
}