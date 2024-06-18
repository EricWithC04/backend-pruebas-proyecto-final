import ExerciseModel from "../models/Exercise.model.js";
import UnitModel from "../models/Unit.model.js";
import ThemeModel from "../models/Theme.model.js";
import UserModel from "../models/User.model.js";
import sequelize from "./db.js";
import executeAllSeeds from "../seeds/index.js";
import app from "../app.js";
import environments from "../environments/index.js";

UnitModel.hasMany(ThemeModel, { foreignKey: "unitId" });
ThemeModel.belongsTo(UnitModel, { foreignKey: "unitId" });
ThemeModel.hasMany(ExerciseModel, { foreignKey: "themeId" });
ExerciseModel.belongsTo(ThemeModel, { foreignKey: "themeId" });

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