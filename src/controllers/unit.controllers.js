import * as UnitService from '../services/Unit.service.js';

export const getAllUnits = async (req, res) => {
    try {
        const allUnits = await UnitService.findAllUnits();

        if (!allUnits.length) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Unidades!'
            })
        }

        res.status(200).send(allUnits);
    } catch (err) {
        console.error(err);
    }
}
export const getOneUnit = async (req, res) => {
    try {
        const { id } = req.params;

        const oneUnit = await UnitService.getUnitById(id);

        if (!oneUnit) {
            res.status(404).send({
                status: 404,
                message: 'No se ha encontrado la Unidad!'
            })
        }

        res.status(200).send(oneUnit);
    } catch (err) {
        console.error(err);
    }
}
export const createUnit = async (req, res) => {
    try {
        const newUnit = await UnitService.createUnitModel(req.body);

        if (!newUnit) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear la Unidad!'
            })
        }

        res.status(201).send({ msg: 'Unidad Creada Correctamente', newUnit });
    } catch (err) {
        console.error(err);
    }
}
export const updateUnit = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedUnit = await UnitService.updateUnitModel(id, req.body);

        if (!updatedUnit) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar la Unidad!'
            })
        }

        res.status(200).send({ msg: 'Unidad actualizada correctamente', updatedUnit });
    } catch (err) {
        console.error(err);
    }
}
export const deleteUnit = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUnit = await UnitService.deleteUnit(id);

        if (!deletedUnit) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado la Unidad!'
            })
        }

        res.status(200).send({ msg: 'Unidad eliminada correctamente', deletedUnit });
    } catch (err) {
        console.error(err);
    }
}