import React ,{useContext}from 'react';
import { TaskContext } from '../Contexts/TaskContext';
import Task from './Task';

const TaskList = () => {
    const {tasks} = useContext(TaskContext)
    return tasks.length ?( 
        <div className='list-wrapper'>
            <ul className='task-list'>
                {tasks.map(task =>(<Task task = {task} />))}
            </ul>
        </div>
     ):(<div className='empty'>No Task Added</div>);
}
 
export default TaskList;