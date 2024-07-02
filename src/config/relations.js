import ExerciseModel from "../models/Exercise.model.js";
import UnitModel from "../models/Unit.model.js";
import ThemeModel from "../models/Theme.model.js";
import UserModel from "../models/User.model.js";
import ObservationModel from "../models/Obvservations.model.js";
import ProgressModel from "../models/Progress.model.js";
import UnitProgressTable from "../models/Unit_Progress.table.js";
import ThemeProgessTable from "../models/Theme_Progress.table.js";
import ExerciseProgressTable from "../models/ExerciseProgress.table.js";
import sequelize from "./db.js";
import executeAllSeeds from "../seeds/index.js";
import app from "../app.js";
import environments from "../environments/index.js";

UnitModel.hasMany(ThemeModel, { foreignKey: "unitId" });
ThemeModel.belongsTo(UnitModel, { foreignKey: "unitId" });
ThemeModel.hasMany(ExerciseModel, { foreignKey: "themeId" });
ExerciseModel.belongsTo(ThemeModel, { foreignKey: "themeId" });

ProgressModel.hasOne(UserModel, {
    foreignKey: 'progressId',
    sourceKey: 'id' 
})
UserModel.belongsTo(ProgressModel, {
    foreignKey: 'progressId',
    targetKey: 'id'
})

ProgressModel.belongsToMany(UnitModel, { through: UnitProgressTable })
UnitModel.belongsToMany(ProgressModel, { through: UnitProgressTable })

ProgressModel.belongsToMany(ThemeModel, { through: ThemeProgessTable })
ThemeModel.belongsToMany(ProgressModel, { through: ThemeProgessTable })

ProgressModel.belongsToMany(ExerciseModel, { through: ExerciseProgressTable })
ExerciseModel.belongsToMany(ProgressModel, { through: ExerciseProgressTable })

ObservationModel.hasOne(ExerciseProgressTable, {
    foreignKey: 'observationsId',
    sourceKey: 'id'
})
ExerciseProgressTable.belongsTo(ObservationModel, {
    foreignKey: 'observationsId',
    targetKey: 'id'
})

const initDataBase = () => {
    sequelize.sync({ alter: true })
        .then(() => {
            console.log('Tables created.');
            executeAllSeeds()
            app.listen(environments.PORT, () => {
                console.log(`Server listening on port ${environments.PORT}`)
            })
        })
}

export default initDataBase