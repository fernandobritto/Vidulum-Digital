import { createConnection } from 'typeorm'

export const connectServerInDB = async () => {
    const conexao = await createConnection();
    console.log(`App connected to DB ${conexao.options.database}`);

    process.on('SIGINT', () => {
        conexao.close().then(() => console.log('DB connection closed'));
    });
};