import express from 'express';
import router from './routes/tasks';

const app = express();

const PORT = 5000;

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) });

app.route('/tasks', router);