import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as logger from 'morgan'

import { connectServerInDB  } from './config/db'
import { routerUser } from './routes/user'


/**
 * Cria a aplicação
 */
export const app = express()


/**
 * Libera o acesso aos serviços
 */
app.use(cors())


/**
 * Permite aplicação receber e enviar JSON
 */
app.use(bodyParser.json())


/**
 * Configura os logs da aplicação
 */
app.use(logger('dev'))


/**
 * Conecta no Banco de Dados
 */
connectServerInDB()


/**
 * Configuração de rotas
 */
app.use('/user', routerUser)
app.use('/', (req, res) => res.send('API Vidulum'))