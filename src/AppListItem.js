import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import APP_CONSTANT from './AppConstants.js';
class AppListItem extends React.Component{

    updateStatus = (updatedStatus) => {
        this.props.onStatusUpdate(this.props.id,updatedStatus);
    }

    onDelete = () => {
        this.props.onDelete(this.props.id);
    }

    render(){
        if(this.props.status === this.props.currentFilter)
            return (
                <li className="task flex border-box justify-between align-center border-radius-3 p-top-5 p-right-5 p-left-5 p-bottom-5 m-top-5 m-bottom-5" key={this.props.id}>
                    <span className="task-name p-0">{this.props.name}</span>
                    <div className="flex align-center">
                        <div className="status-container flex justify-between">
                            <Dropdown drop="down">
                            <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm">
                            {APP_CONSTANT.Status_Full[this.props.status]}
                            </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {
                                        Object.values(APP_CONSTANT.Status_Full)
                                        .map( 
                                            status => 
                                            <Dropdown.Item onSelect={this.updateStatus.bind(this)} eventKey={APP_CONSTANT.Status_Acr[status]} key={status}>{status}</Dropdown.Item>
                                        )
                                    }
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="task-actions">
                            <span className="underline cursor-pointer link-delete" onClick={this.onDelete.bind(this)}>Delete</span>
                        </div>
                    </div>
                </li>
            )
        return null;
    }
}

export default AppListItem;