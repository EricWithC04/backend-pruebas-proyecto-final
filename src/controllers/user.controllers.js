import * as UserService from "../services/User.service.js"

export const ctrlGetAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();

        if (!users.length) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Usuarios!'
            })
        }

        res.status(200).send(users);
    } catch (err) {
        console.error(err);
    }
}
export const ctrlGetOneUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserService.getUserById(id);

        if (!user) {
            res.status(404).send({
                status: 404,
                message: 'No se ha encontrado el Usuario!'
            })
        }

        res.status(200).send(user);
    } catch (err) {
        console.error(err);
    }
}
export const ctrlCreateUser = async (req, res) => {
    try {
        const newUser = await UserService.createUser(req.body);
        res.status(201).send({ msg: 'Usuario Creado Correctamente', newUser });
    } catch (err) {
        console.error(err);
    }
}
export const ctrlUpdateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserService.updateUser(id, req.body);

        res.status(200).send({ msg: 'Usuario actualizado correctamente', user });
    } catch (err) {
        console.error(err);
    }
}
export const ctrlDeleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserService.deleteUser(id);

        res.status(200).send({ msg: 'Usuario eliminado correctamente', user });
    } catch (err) {
        console.error(err);
    }
}