import * as ThemeService from '../services/Theme.service.js';

export const getAllThemes = async (req, res) => {
    try {
        const themes = await ThemeService.findAllThemes();

        if (!themes.length) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Temas!'
            })
        }

        res.status(200).send(themes);
    } catch (err) {
        console.error(err);
    }
}
export const getOneTheme = async (req, res) => {
    try {
        const { id } = req.params;

        const oneTheme = await ThemeService.getThemeById(id);

        if (!oneTheme) {
            res.status(404).send({
                status: 404,
                message: 'No se ha encontrado el Tema!'
            })
        }

        res.status(200).send(oneTheme);
    } catch (err) {
        console.error(err);
    }
}
export const createTheme = async (req, res) => {
    try {
        const newTheme = await ThemeService.createThemeModel(req.body);

        if (!newTheme) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el Tema!'
            })
        }

        res.status(201).send({ msg: 'Tema Creado Correctamente', newTheme });
    } catch (err) {
        console.error(err);
    }
}
export const updateTheme = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedTheme = await ThemeService.updateThemeModel(id, req.body);

        if(!updatedTheme) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el Tema!'
            })
        }

        res.status(200).send({ msg: 'Tema actualizado correctamente', updatedTheme });
    } catch (err) {
        console.error(err);
    }
}
export const deleteTheme = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTheme = await ThemeService.deleteTheme(id);

        if (!deletedTheme) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido eliminar el Tema!'
            })
        }
        
        res.status(200).send({ msg: 'Tema eliminado correctamente', deletedTheme });
    } catch (err) {
        console.error(err);
    }
}