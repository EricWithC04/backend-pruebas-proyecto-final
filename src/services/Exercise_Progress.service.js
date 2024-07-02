import ExerciseProgressTable from "../models/Exercise_Progress.table.js";

export const createExerciseProgress = async (data) => {
    const newExerciseProgress = await ExerciseProgressTable.create(data)
    return newExerciseProgress
}

export const updateExerciseProgress = async (id, data) => {
    const updatedExerciseProgress = await ExerciseProgressTable.update(data, { where: { id } })
    return updatedExerciseProgress
}

export const deleteExerciseProgress = async (id) => {
    const deletedExerciseProgress = await ExerciseProgressTable.destroy({ where: { id } })
    return deletedExerciseProgress
}