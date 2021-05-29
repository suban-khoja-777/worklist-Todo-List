const taskContainer = document.querySelector('ul.task-container');


const resetFilterSelectionUI = () => {
    const filters =  document.querySelectorAll('.filter-container > .filter-actions > .btn');
    for(let i=0;i<filters.length;i++){
        filters[i].classList.remove('selected');
    }
}

const createTasksOnUI = (taskList) => {
    taskList.forEach(task => {
        taskContainer.appendChild(CreateATaskOnUI(task));
    });
}

const CreateATaskOnUI = (task) => {
    const task_ele = TASK.content.cloneNode(true);
    task_ele.querySelector('.task').id = task.id;
    task_ele.querySelector('.task > .task-name').textContent = task.name;
    //task_ele.querySelector('.task > .task-name').contentEditable = "true";
    task_ele.querySelector('.task > .status-container > .status-'+task.status).classList.add('hide');
    return task_ele;
}