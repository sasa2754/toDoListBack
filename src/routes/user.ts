import express, { Request, Response, Router } from 'express';
import { login, register } from '../controllers/User.ts';


const router : Router = express.Router();

router
    .post('/register', async (req: Request, res: Response) => {
        register(req, res);
    })

    .post('/login', async (req: Request, res: Response) => {
        login(req, res);
    })
    
export default router;