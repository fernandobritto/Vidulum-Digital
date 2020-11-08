import { app } from './app'

const PORT = 3000

const server =
    app.listen(PORT, () => console.log(`App in door ${PORT}`))

process.on('SIGINT', () => {
    server.close()
    console.log('APP finished')
})
