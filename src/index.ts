import express from 'express';
import cors from 'cors';
import usuariosRouter from './routes/usuarios.route'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/usuarios', usuariosRouter);

app.listen(PORT, () => {
    console.log(`Escuchando el puerto ${PORT}`);
});