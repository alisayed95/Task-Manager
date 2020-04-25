import React, {createContext , useState} from 'react';
import uuid from 'uuid/v1'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('tasksKey')) || [];
    const [tasks, setTasks] = useState(initialState)
    localStorage.setItem('tasksKey',JSON.stringify(tasks))
    const [editItem, setEditItem] = useState(null);
    const addTask = (title,id) => {
        setTasks([...tasks,{title,id:uuid()}])
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    const clearTasks = () => {
        setTasks([]);
    }
    const findTask = (id) =>{
        setEditItem(tasks.find(task => task.id === id));
    }
    const editTask= (title,id) =>{
        const newTasks = tasks.map(task => (task.id === id? {title,id} : task));
        setTasks(newTasks);
        setEditItem(null);
    }
    return ( 
        <TaskContext.Provider value={{tasks,addTask,clearTasks,removeTask,findTask,editTask,editItem, }}>
            {props.children}
        </TaskContext.Provider>
     );
}
 
export default TaskContextProvider;