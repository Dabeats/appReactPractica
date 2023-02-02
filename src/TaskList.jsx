const TaskList = ({tasks}) =>{

   
if (tasks.length == 0) {
    return <h1>No hay tareas</h1>
}

    return <div>
        {
            tasks.map(task =>(<div key={task.id}>
                <h1>{task.title}</h1>
                <h3>{task.description}</h3>
                <h3>id: {task.id}</h3>
            </div>))
        }
    </div>
}
export default TaskList