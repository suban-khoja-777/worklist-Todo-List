import React from 'react';
import APP_CONSTANT from './AppConstants.js';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

class AppFilter extends React.Component{

    onFilterChange(selectedFilter){
        this.props.onFilterChange(selectedFilter);
    }

    render(){
        return (
            <div className="container flex justify-center flex-column m-top-1em">
                <div className="filter-container flex justify-center">
                    <ToggleButtonGroup name="filter" type="radio" defaultValue={APP_CONSTANT.DEFAULT_FILTER} className="mb-2 filter-actions" onChange={this.onFilterChange.bind(this)}>
                        <ToggleButton name="ns" value="ns" size="sm" variant="outline-primary" type="radio" className="custom-primary-outline">Not Started</ToggleButton>
                        <ToggleButton name="ip" value="ip" size="sm" variant="outline-primary" type="radio" className="custom-primary-outline">In Progess</ToggleButton>
                        <ToggleButton name="cp" value="cp" size="sm" variant="outline-primary" type="radio" className="custom-primary-outline">Completed</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        )
    }
}

export default AppFilter;