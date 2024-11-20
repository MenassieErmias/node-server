import { Router } from "express";

const tasksRouter = Router();

const tasks = [
  {
    name: 'Menassie',
    todo: 'Something'
  }
];

tasksRouter.get('/', (req, res) => {
  res.status(200).json(tasks);
})


export default tasksRouter;