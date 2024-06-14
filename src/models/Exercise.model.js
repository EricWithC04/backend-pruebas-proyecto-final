import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ExerciseModel = sequelize.define(
    "exercise",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)

export default ExerciseModel