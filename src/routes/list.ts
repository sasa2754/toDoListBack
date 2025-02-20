import express, { Request, Response, Router } from 'express';
import toDoList from '../models/List.ts';


const router: Router = express.Router();

router
    .post('/', async (req: Request, res: Response) => {
        const { title, description } = req.body;

        try {
            const newTask = new toDoList({
                title,
                description,
                completed: false,
                createdAt: new Date(),
                updatedAt: new Date() 
            });
            await newTask.save();
            res.status(201).json(newTask);

        } catch (error) {
            res.status(400).json({ message: 'Erro ao criar task: ', error });
        }
    })

    .get('/', async (req: Request, res: Response) => {
        try {
            const task = await toDoList.find();
            res.status(200).json(task);
        } catch (error) {
            res.status(404).json({ message: 'Erro ao buscar tasks: ', error });
        }
    })

    .get('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const task = await toDoList.findById(id);
            res.status(200).json(task);
        } catch (error) {
            res.status(404).json({ message: 'Task não encontrada: ', error });
        }
    })

    .put('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        const { title, description, completed, createdAt, updatedAt } = req.body;

        try {
            const task = await toDoList.updateOne({ _id: id }, { title, description, completed, createdAt, updatedAt }, { new: true });

            if (!task)
                res.status(404).json({ message: 'Task não encontrada!'});

            res.status(200).json(task);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao editar task: ', error });
        }
    })

    .delete('/:id', async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const task = await toDoList.deleteOne({ _id: id });

            if (!task)
                res.status(404).json({ message: 'Task não encontrada!'});

        } catch (error) {
            res.status(400).json({ message: 'Erro ao apagar task: ', error });
        }
    })

    .patch('completed/:id', async (req: Request, res: Response) => {
        const { id } = req.params;
        
        try {
            const task = await toDoList.findById(id);
            if (!task)
                res.status(404).json({ message: 'Task não encontrada!'});

            const taskCompleted = await toDoList.updateOne({ _id: id }, { completed: !task?.completed }, { new: true });
            

            res.status(200).json(taskCompleted);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao editar task: ', error });
        }
    })
    


export default router;
