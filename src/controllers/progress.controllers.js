import * as ProgressService from "../services/Progress.service.js";

export const getUserProgress = async (req, res) => {
    try {
        const { id } = req.params;
        
        const progress = await ProgressService.findAllUserProgress(id);

        if (!progress) {
            res.status(404).send({
                status: 404,
                message: 'No se ha encontrado el progreso!'
            })
        }

        return res.status(200).send(progress);
    } catch (err) {
        console.error(err);
    }
}