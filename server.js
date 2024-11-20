import express from 'express';

import tasksRouter from './routes/tasks.js';

const app = express();

const PORT = 5000;

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });


// tasks route
app.use('/tasks', tasksRouter);