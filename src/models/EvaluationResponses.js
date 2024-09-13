import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const EvaluationResponses = sequelize.define("evaluation_responses", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
});


export default EvaluationResponses;