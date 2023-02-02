import { useState } from "react";

const TaskForm =() =>{

    const [ newTitle, setNewTitle] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(newTitle);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Escribe tu tarea" onChange={(e) =>{
                setNewTitle(e.target.value);
            }}/>
            <button>Guardar</button>
        </form>
    )
}
export default TaskForm