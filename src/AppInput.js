import React from 'react';


class AppInput extends React.Component{

    state = {
        name : ""
    }

    onSubmit(event){
        console.log(this.state.name);
        event.preventDefault();
        this.props.onSubmit(this.state.name);
        this.setState({name : ''});
    }

    onChange(event){
        this.setState({name : event.target.value});
    }
    render(){
        return (
            <div className="flex justify-center">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input value={this.state.name} className="p-top-5 p-bottom-5 p-left-5 p-right-5 outline-none border-radius-3 m-16" type="text" placeholder="Type new task here. Press enter to create." onChange={this.onChange.bind(this)} />
                </form>
            </div>
        )
    }

}

export default AppInput;