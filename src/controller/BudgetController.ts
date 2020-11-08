import { getManager } from 'typeorm'
import { Budget } from '../entity/Budget'


export class BudgetController {
    async save(budget: Budget) {
        const budgetSave = await getManager().save(budget)
        return budgetSave
    }
}
