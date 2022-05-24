import React from 'react';
import Actions from './Actions';

const TaskItem = (props) => {
    return ( 
        <tr>
            <th scope='row'>{props.curTask.number}</th>
            <td>{props.curTask.task}</td>
            <td>{props.curTask.status}</td>
            <td><Actions /></td>
        </tr>
     );
}
 
export default TaskItem;