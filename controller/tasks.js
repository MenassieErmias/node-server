import v4 from 'uuid';

let tasks = [];

// Get all tasks
const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
}

const createTasks = (req, res) => {
  const { name, time, endTime } = req.body;

  const newTask = {
    id: v4(),
    name: name,
    time: time,
    endTime: endTime,
    complete: false
  }

  tasks = [...tasks, newTask];

}


// change task status
// should include all changes in next commit
const changeTaskStatus = (req, res) => {
  const id = req.params.id;

  const index = tasks.indexOf(tasks.find(task => task.id === id));

  tasks[index].complete = !tasks[index].complete;
}


