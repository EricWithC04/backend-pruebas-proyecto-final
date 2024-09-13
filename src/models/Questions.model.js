import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const QuestionModel = sequelize.define("question", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
});

export default QuestionModel;