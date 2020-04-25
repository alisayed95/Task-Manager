import React,{useContext,useState,useEffect} from 'react';
import { TaskContext } from '../Contexts/TaskContext';

const TaskForm = () => {
    const {addTask,clearTasks,editItem,editTask} = useContext(TaskContext);
    const [title,setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(editItem === null){
            addTask(title);
            setTitle('');
        }else{
            editTask(title,editItem.id);
        }  
    }
    useEffect(()=>{
        if(editItem){
            setTitle(editItem.title);
        }else{
            setTitle('');
        }
    },[editItem])
    return ( 
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder='Enter Your Task'
            value={title}
            required
            onChange={handleChange}
            />
            <div className="btns">
            <button className ='add-btn' type='submit'>{!editItem? "Add" : "Edit"}</button>
                <button className = 'clear-btn' onClick={clearTasks}>Clear</button>
            </div>
        </form>
     );
}
 
export default TaskForm;