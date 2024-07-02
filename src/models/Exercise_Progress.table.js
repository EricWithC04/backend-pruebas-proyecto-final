import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import ExerciseModel from './Exercise.model.js';
import ProgressModel from './Progress.model.js';

const ExerciseProgressTable = sequelize.define('exercise_progress', {
    progressId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProgressModel,
            key: 'id'
        }
    },
    exerciseId: {
        type: DataTypes.INTEGER,
        references: {
            model: ExerciseModel,
            key: 'id'
        }
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});

export default ExerciseProgressTable;