import React from 'react';
import AppListItem from './AppListItem';

class AppList extends React.Component{

    onStatusUpdate = (id,updatedStatus) => {
        this.props.onStatusUpdate(id,updatedStatus);
    }

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render(){
        return (
            <ul className="task-container list-none flex justify-center align-center flex-column">
            {
                (this.props.tasks) 
                &&
                this.props.tasks.map(task => 
                    <AppListItem 
                    onStatusUpdate={this.onStatusUpdate.bind(this)} 
                    currentFilter={this.props.currentFilter} 
                    onDelete = {this.onDelete.bind(this)}
                    key={task.id} 
                    id={task.id} 
                    name={task.name} 
                    status={task.status} />
                )
            }
            </ul>
        )
    }
}

export default AppList;