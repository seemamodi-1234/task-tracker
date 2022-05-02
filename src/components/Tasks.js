import Task from "./Task"
const Tasks = ({tasks,ondelete,onToggle}) => {
    //console.log(tasks,ondelete)
    return (
        <>
            {tasks.map((task) =>
                (<Task key={task.id} task={task} 
                ondelete={ondelete} onToggle={onToggle}/>
            ))}
        </>
    )
}
export default Tasks