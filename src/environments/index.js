import { configDotenv } from "dotenv";
configDotenv();

const environments = {
    PORT: process.env.PORT || 3000,
    SECRET: process.env.SECRET,
    DB: {
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        DIALECT: process.env.DB_DIALECT
    }
}

export default environments