import { User } from '../entity/User'
import { Router } from 'express'
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


/**
 * Serviço para recuperar todos os usuários
 */
routerUser.get('/', async (req, res) => {
    const users = await userCtrl.recoverAll();
    res.json(users);
})


/**
 * Serviço para recuperar os lançamentos de um determinado usuário
 */
routerUser.get('/budgets/:idUser', async (req, res) => {
    const idUser = parseInt(req.params.idUser);
    const budgets = await userCtrl.retrieveUseBudgets(idUser);
    res.json(budgets);
});
