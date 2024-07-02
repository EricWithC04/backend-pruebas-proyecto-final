import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ObservationModel = sequelize.define('observation', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
        allowNull: false
    },
    attempts: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    },
    errors: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    code_quality: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
    }
});

export default ObservationModel;