import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const EvaluationModel = sequelize.define("evaluations", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    corrects: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
    incorrects: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

export default EvaluationModel;