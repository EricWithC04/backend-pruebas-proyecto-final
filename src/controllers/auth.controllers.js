import { createUser, getUserByUserNameOrMail, getUserForLogin } from "../services/User.service.js";
import { createProgress } from "../services/Progress.service.js";
import { createJWT } from "../utils/jwt.js";
import { createAllThemeProgressForUser } from "../services/Theme_Progress.service.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await getUserByUserNameOrMail(username, email);

        if (user.userForName || user.userEmail) {
            return res.status(400).send({
                status: 400,
                message: user.userForName ? 'Usuario ya existe' : 'Email ya existe',
            })
        }

        const newUser = await createUser({ username, email, password });

        if (!newUser) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar el usuario!'
            })
        }

        const userProgress = await createProgress(newUser);

        if (!userProgress) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el progreso!'
            })
        }

        await createAllThemeProgressForUser(newUser)

        return res.status(201).send({ message: 'Usuario Creado Correctamente' });
    } catch (err) {
        console.error(err);
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = getUserForLogin(email, password);

        if (!user) {
            return res.status(401).send({
                status: 401,
                message: 'Credenciales incorrectas'
            })
        }

        const token = await createJWT({ id: user.id });

        return res.status(200).json({
            message: 'Sesión iniciada correctamente.',
            token
        });

    } catch (err) {
        console.error(err);
    }
}