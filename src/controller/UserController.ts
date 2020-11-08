import { getManager } from "typeorm"
import { User } from "../entity/User"

export class UserController {
    async save(user: User) {
        const userSave = await getManager().save(user)
        return userSave
    }

    async recoverAll() {
        const users = await getManager().find(User)
        return users
    }

    async recoverById(id: number) {
        const user = await getManager().findOne(User, id)
        return user
    }

    async retrieveUseBudgets(id: number) {
        const user = await getManager().findOne(User, id, {
            relations: ['budgets']
        });
        //return user.budget
    }
}
