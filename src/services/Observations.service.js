import ObservationModel from "../models/Obvservations.model.js";

export const createObservation = async (data) => {
    const newObservation = await ObservationModel.create(data)
    return newObservation
}

export const updateObservation = async (id, data) => {
    const updatedObservation = await ObservationModel.update(data, { where: { id } })
    return updatedObservation
}

export const deleteObservation = async (id) => {
    const deletedObservation = await ObservationModel.destroy({ where: { id } })
    return deletedObservation
}