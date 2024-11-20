import v4 from 'uuid';

const tasks = [
  {
    name: 'Menassie',
    todo: 'Something'
  }
];

const getAllTasks = (req, res) => {
  res.status(200).json(tasks);
}

const createTasks = (req, res) => {

}