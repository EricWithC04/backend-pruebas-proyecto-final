import sequelize from "../config/db";

const UserModel = sequelize.define(
    "user",
    {
        id: {
            type: sequelize.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userName: {
            type: sequelize.DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: sequelize.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize.DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: sequelize.DataTypes.ENUM("LOW", "MEDIUM", "HIGH"),
            allowNull: false,
            defaultValue: "LOW"
        }
    }
)

export default UserModel