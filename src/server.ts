import express from 'express';
import initRoutes from './routes/routes.ts';
import connectDB from './database/database.ts';

const app = express();
const port = 8080;

connectDB();
initRoutes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));


// app.get('/getTeste', (req, res) => {
//     res.send('GET: Requisição recebida com sucesso!');
// });