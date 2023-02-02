import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data} from "./task.js";
import { useState,useEffect } from "react";

const App = () =>{

  const [ tasks, setTasks] = useState([])

  useEffect(()=>{
      setTasks(data)
  },[])

  const createTask =(task) =>{
    setTasks([...tasks, task])
  }

  return ( 
  <>
    <TaskForm createTask={createTask}/>
    <TaskList tasks={tasks}/>
  </>
  )
}

export default App
