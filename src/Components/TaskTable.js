import React from 'react';
import TaskItem from './TaskItem';
import backend from '../backend';

class TaskTable extends React.Component {

    renderTasks = () => {

        if (this.props.tasks) {
            const renderedTasks = this.props.tasks.map((task) => {
                return <TaskItem curTask={task} />
            })
            return renderedTasks;
        } 
        else {
            
        }
    }

    render() {
        return (
            <div className='row' style={{ paddingLeft: '20%', paddingRight: '20%'}}>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>No.</th>
                            <th scope='col'>Todo item</th>
                            <th scope='col'>Status</th>
                            <th scope='col' style={{ width: '30%'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTasks()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TaskTable;