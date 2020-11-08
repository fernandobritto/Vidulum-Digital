import { UserController } from '../controller/UserController'
import { BudgetController } from '../controller/BudgetController'
import { Router } from 'express'
import { Budget } from '../entity/Budget'

export const routerBudget = Router()
const budgetCtrl = new BudgetController ()
const userCtrl = new UserController()

/**
 * Serviço para salvar um novo lançamento do usuario
 */
routerBudget.post('/', async (req, res) => {
    const { idUser, value, description, date } = req.body
    const user = await userCtrl.recoverById(idUser)
    if (user) {
        const budget = new Budget(value, description, date, user)
        const budgetSave = await budgetCtrl.save(budget)
        res.json(budgetSave)
    } else {
        res.status(404).json({ mensagem: 'Launch user not found' })
    }
})
