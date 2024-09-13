import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OptionModel = sequelize.define("options", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.STRING,
        required: true,
    },
    correct: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
});

export default OptionModel;