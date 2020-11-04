import { Router } from 'express'
import { User } from '../entity/User'
import { UserController } from '../controller/UserController'



export const routerUser = Router()
const userCtrl = new UserController()

/**
 * Serviço resposavel por salvar um novo usuário
 */
routerUser.post('/', async (req, res) => {
    const { name, email } = req.body
    const user = new User(name, email)
    const userSave = await userCtrl.save(user)
    res.json(userSave)
})
