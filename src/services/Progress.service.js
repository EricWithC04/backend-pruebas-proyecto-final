import ProgressModel from "../models/Progress.model.js";
import UnitModel from "../models/Unit.model.js";
import UnitProgressTable from "../models/Unit_Progress.table.js";
import ThemeModel from "../models/Theme.model.js";
import ThemeProgressTable from "../models/Theme_Progress.table.js";

export const findAllUserProgress = async (idUser) => {
    const allUserProgress = await ProgressModel.findAll({
        where: { id: idUser },
        include: [
            {
                model: UnitModel,
                attributes: ["id"],
                through: {
                    model: UnitProgressTable,
                    attributes: ["complete"]
                }
            },
            {
                model: ThemeModel,
                attributes: ["id", "unitId"],
                through: {
                    model: ThemeProgressTable,
                    attributes: ["complete"]
                }
            }
        ]
    });
    return allUserProgress;
}