import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const UserModel = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }/* ,
        level: {
            type: DataTypes.ENUM("LOW", "MEDIUM", "HIGH"),
            allowNull: false,
            defaultValue: "LOW"
        } */
    }
)

export default UserModel