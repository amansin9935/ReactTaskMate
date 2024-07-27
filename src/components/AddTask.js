
export const AddTask = ({taskList, setTaskList, task, setTask}) => {
    const handleSubmit = (e) => {
        e.preventDefault(); 
        //console.log(task);
       
        if(task.id){ //Edit
            const date = new Date();
            const updatedTaskList = taskList.map(todo => (
                todo.id === task.id 
                ? {id:task.id, name: task.name,time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`} 
                : todo
            ));
            setTaskList(updatedTaskList);
            setTask({});
        }
        else{ //Add
            const date = new Date();
            const newTask={
                id: date.getTime(),
                name: e.target.task.value,
                time: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
            }
            setTaskList([...taskList, newTask]);
            setTask({});
        }
        // console.log(e.target.task.value);
        // console.log(date.getTime());
        
    }
  return (
   <section className="addTask">
    <form onSubmit={handleSubmit}>
        <input type="text" value={task.name || ""} placeholder="Add Task" autoComplete="off" name="task" 
        onChange={e => setTask({...task, name:e.target.value})} />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
    </form>
   </section>
  )
}

