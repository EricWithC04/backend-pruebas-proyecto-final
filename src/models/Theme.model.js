import { DataTypes } from "sequelize";
import sequelize from "../config/db";

const ThemeModel = sequelize.define(
    "theme",
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
        }
    }
)

export default ThemeModel