import { Router } from "express";
import { getAllTasks, createTasks, changeTaskStatus } from '../controller/tasks.js';

const tasksRouter = Router();

tasksRouter.get('/', getAllTasks);

tasksRouter.post('/', createTasks);

tasksRouter.put('/:id', changeTaskStatus);


export default tasksRouter;