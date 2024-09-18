import express from 'express';
import conectaNaDb from './db';
import cors from 'cors';

const app = express();
app.use(cors());
const conexao = await conectaNaDb();

conexao.on('error', (erro) => {
    console.error('Erro ao conectar ao MongoDB', erro)
})

conexao.once('open', () => {
    console.log("Conectado ao MongoDB")
})

app.listen(3000, () => {
    console.log('Servidor conectado')
})