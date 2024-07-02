import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import ThemeModel from './Theme.model.js';
import ProgressModel from './Progress.model.js';

const ThemeProgressTable = sequelize.define('theme_progess', {
    progressId: {
        type: DataTypes.INTEGER,
        references: {
            model: ProgressModel,
            key: 'id'
        }
    },
    themeId: {
        type: DataTypes.INTEGER,
        references: {
            model: ThemeModel,
            key: 'id'
        }
    },
    complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});

export default ThemeProgressTable;