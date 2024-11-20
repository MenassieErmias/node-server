import v4 from 'uuid';

let tasks = [

];

// Get all tasks
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
}

const createTasks = (req, res) => {
  const { name, time, endTime, complete: false} = req.body;

  const newTask = {
    id: v4(),
    name: name,
    time: time,
    endTime: endTime,
    complete: false
  }

  tasks = [...tasks, newTask];

}

