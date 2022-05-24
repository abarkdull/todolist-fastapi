import React, { useState, useEffect } from 'react';
import Banner from './Banner';
import TaskButton from './TaskButton';
import TaskTable from './TaskTable';
import backend from '../backend';

const App = (props) => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        
        async function fetchTasks() {
            const allTasks = await backend.get("/");
            setTasks(allTasks.data);
        }

        fetchTasks();
    }, []);


    const onTaskSubmit = async () => {
        const fetchTasks = await backend.get("/");
        setTasks(fetchTasks.data);
    };

    return ( 
        <div className='container'>
            <Banner title="To Do List" />
            <TaskButton onTaskSubmit={() => onTaskSubmit()} />
            <TaskTable tasks={tasks} />
        </div>
     );
}
 
export default App;