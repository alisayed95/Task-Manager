import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faPen } from '@fortawesome/free-solid-svg-icons'
import { TaskContext } from '../Contexts/TaskContext';


const Task = ({task}) => {
    const {removeTask,findTask } = useContext(TaskContext)
    const handleClick = () => {
        removeTask(task.id)
    }
    return ( 
        <li className='list-item'>
            <p>{task.title}</p>
            <div>
                <button className='btn-icon'>
                    <FontAwesomeIcon className='aws-icon' icon={faTrashAlt} onClick={handleClick}/>
                </button>
                <button className='btn-icon'>
                    <FontAwesomeIcon className='aws-icon' icon={faPen} onClick={()=>findTask(task.id)}/>
                </button>
            </div>
        </li>
     );
}
 
export default Task;