import express, { Request, Response, Router } from 'express';
import { deleteTaskById, getAllTasks, getTaskById, postTask, updateCheckById, updateTaskById } from '../controllers/Task.ts';


const router: Router = express.Router();

router
    .post('/', async (req: Request, res: Response) => {
        postTask(req, res);
    })

    .get('/', async (req: Request, res: Response) => {
        getAllTasks(req, res);
    })

    .get('/:id', async (req: Request, res: Response) => {
        getTaskById(req, res);
    })

    .put('/:id', async (req: Request, res: Response) => {
        updateTaskById(req, res);
    })

    .delete('/:id', async (req: Request, res: Response) => {
        deleteTaskById(req, res);
    })

    .patch('completed/:id', async (req: Request, res: Response) => {
        updateCheckById(req, res);
    })
    


export default router;
