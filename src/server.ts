import express from 'express';
import initRoutes from './routes/routes.ts';
import connectDB from './database/database.ts';
import cors from 'cors';

const app = express();
const port = 8080;

connectDB();

app.use(cors({
    origin: '*'
}))

initRoutes(app);


app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));


// app.get('/getTeste', (req, res) => {
//     res.send('GET: Requisição recebida com sucesso!');
// });