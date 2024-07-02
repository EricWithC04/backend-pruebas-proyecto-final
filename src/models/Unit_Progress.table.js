import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import ProgressModel from './Progress.model.js';
import UnitModel from './Unit.model.js';

const UnitProgressTable = sequelize.define('unit_progress', {
    progressId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProgressModel,
            key: 'id'
        }
    },
    unitId: {
        type: DataTypes.INTEGER,
        references: {
            model: UnitModel,
            key: 'id'
        }
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});

export default UnitProgressTable;