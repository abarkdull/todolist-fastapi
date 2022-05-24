import React, { useState } from 'react';
import backend from '../backend';

const TaskButton = (props) => {

    const [input, setInput] = useState("");

    const onSubmit = async (event) => {

        event.preventDefault();

        const postBody = {
            "task": input
        }

        const res = await backend.post("/task", postBody)
        if (!res.data) {
            console.log("POST error");
        } else {
            props.onTaskSubmit();
        }
    }

    return ( 
        <div className='row' style={{ padding: '6% 20%'}}>
            <form class="form-inline" onSubmit={(event) => onSubmit(event)}>
                <div className='input-group'>
                    <input type="text" onChange={(event) => setInput(event.target.value)} className='form-control' placeholder='Enter a task here'></input>
                    <button type='submit' className='btn btn-primary'>Save</button>
                </div>
            </form>
        </div>
     );
}
 
export default TaskButton;