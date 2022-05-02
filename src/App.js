import {  useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState(
    [
        {
            id:1,
            text:'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at School',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text:'Food Shopping',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        }
    ]
)

const addtask= (task)=>{
  const id=Math.floor(Math.random()*10000)+1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}
const deleteTask =(id) =>{
  setTasks(tasks.filter((task)=>task.id!==id))
}

// useEffect(()=>{
//   console.log(showAddTask)
// },[showAddTask])
const toggleReminder=(id)=>{
  setTasks(
    tasks.map((task) => 
    task.id === id ? {...task,reminder:
    !task.reminder}:task)
  )
}
const onAddingTask=()=>{
  setShowAddTask(true)
}
  return (
    <div className="container">
      <Header onAddingTask={onAddingTask}/>
      {showAddTask ? <AddTask onAdd={addtask}/>:<></>}
      {tasks.length >0 ? 
      (<Tasks tasks={tasks} ondelete={deleteTask} onToggle={toggleReminder}/>):
      ('No Tasks to show')}
    </div>

  );
}
export default App;