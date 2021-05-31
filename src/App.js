import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './AppHeader.js';
import AppFilter from './AppFilter';
import React from 'react';
import APP_CONSTANT from './AppConstants';

import AppInput from './AppInput';
import newId from './AppUtility';
import AppList from './AppList';


class App extends React.Component{

  componentDidMount(){
    this.setState({tasks : JSON.parse(window.localStorage.getItem(APP_CONSTANT.APP))});
  }

  state = {
    currentFilter: APP_CONSTANT.DEFAULT_FILTER
  }

  applyFilter = (selectedFilter) => {
    this.setState({currentFilter : selectedFilter});
  }

  onStatusUpdate = (id,updatedStatus) => {
    let taskToUpdate = this.state.tasks.filter(task => task.id === id);
    let otherTasks = this.state.tasks.filter(task => task.id !== id);
    taskToUpdate[0].status = updatedStatus;
    this.setState({
        tasks : [...taskToUpdate,...otherTasks],
    },() => {
      this.updateStorage();
    });
  }

  onDelete = (id) => {
    let otherTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks : [...otherTasks],
    },() => {
      this.updateStorage();
    });
  }

  updateStorage(){
    window.localStorage.setItem(APP_CONSTANT.APP , JSON.stringify(this.state.tasks));
  }

  onNewTask = (taksName) => {
    const newTask = {
      id : newId(),
      name : taksName,
      status : APP_CONSTANT.DEFAULT_STATUS
    };
    const tasks = this.state.tasks || [];
    this.setState(prevState => ({
      tasks: [...tasks, newTask]
    }),() => {
      this.updateStorage();
    })
  }

  render(){
    return (
      <div className="App">
        
        <AppHeader 
          devname={APP_CONSTANT.DEV_NAME}
          appname={APP_CONSTANT.APP_NAME}
        />

        <AppInput 
          onSubmit={this.onNewTask.bind(this)}
        />

        <AppFilter 
          currentFilter={this.state.currentFilter} 
          onFilterChange={this.applyFilter.bind(this)}
        />
        
        <AppList 
          tasks={this.state.tasks}
          onStatusUpdate={this.onStatusUpdate.bind(this)} 
          currentFilter={this.state.currentFilter} 
          onDelete = {this.onDelete.bind(this)}
        />
        
      </div>
    );
  }
}

export default App;
