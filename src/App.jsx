import {useState, useEffect} from 'react'

import { TaskList } from "./TaskList";
import { TaskForm } from "./TaskForm";

import { tasks as data, tasks } from "./tasks.js";

function App() {

  const [tasks, setTasks] = useState(data)
  useEffect(() => {
    setTasks(data);
  }, []);


  function createTask(task){
    setTasks([...tasks, task])
  }

  return (
    <div>
      <TaskForm createTask={createTask}></TaskForm>
      <TaskList tasks={tasks}></TaskList>
    </div>
  );
}

export default App;
