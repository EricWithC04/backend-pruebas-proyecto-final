import jwt from 'jsonwebtoken'
import env from '../environments/index.js'

export const createJWT = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, env.SECRET, (err, token) => {
            if (err) {
                reject('Error al firmar el token')
            }

            resolve({ token })
        })
    })
}