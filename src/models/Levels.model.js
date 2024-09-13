import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const LevelModel = sequelize.define("levels", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        required: true,
    },
});

export default LevelModel;