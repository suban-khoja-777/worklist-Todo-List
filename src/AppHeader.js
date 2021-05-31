import React from 'react';
import APP_CONSTANT from './AppConstants.js';

class AppHeader extends React.Component{
    render(){
        return (
            <header className="p-left-5 p-right-5 p-top-8 p-bottom-8 flex justify-between align-center text-white">
                <div className="company-container flex align-center">
                    <span className="company-name bold">{this.props.appname}</span>
                </div>        
                <span className="dev-name bold">{this.props.devname}</span>
            </header>
        )
    }
}

export default AppHeader;