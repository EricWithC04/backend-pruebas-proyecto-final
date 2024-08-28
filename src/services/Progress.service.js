import ProgressModel from "../models/Progress.model.js";
import UserModel from "../models/User.model.js";
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

export const createProgress = async (newUser) => {    
    const user = await UserModel.findByPk(newUser.id);

    if (!user) {
        return null
    }

    const newProgress = await ProgressModel.create({ id: newUser.id });

    if (!newProgress) {
        return null
    }

    await user.update({ progressId: newProgress.id });

    return newProgress;
}