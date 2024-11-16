import { Router } from "express";

const router = Router();

const tasks = [];

router.get('/', (req, res) => {
  res.status(200).json(tasks);
})


export default router;