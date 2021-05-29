const applyFilter = (filterName) => {
    resetFilterSelectionUI();
    currentFilter = filterName;
    taskContainer.innerHTML = '';
    filteredTasks = tasks.filter(task => task.status === currentFilter);
    document.querySelector('.filter-container > .filter-actions > .btn-'+currentFilter).classList.add('selected');
    createTasksOnUI(filteredTasks);
}

const newId = () => {
    let str = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let id_length = 7;
    let new_id = '';
    for(let i=0;i<id_length;i++){
        new_id += str[Math.floor(Math.random() * 62)];
    }
    return new_id;
}

const onload = () => {
    if(!window.localStorage.getItem(APP)){
        window.localStorage.setItem(APP , JSON.stringify([]));
    }
    tasks = getTasks();
    applyFilter(DEFAULT_FILTER);
}

const getTasks = () => {
    return JSON.parse(window.localStorage.getItem(APP));
}

const createNewTask = (e) => {
    if(e.key === 'Enter'){
        const task_name = e.target.value;
        if(task_name){
            let new_task = {
                id : newId(),
                name : task_name,
                status : DEFAULT_STATUS
            };
            createNewTaskOnStorage(new_task);
            if(currentFilter === DEFAULT_FILTER){
                taskContainer.appendChild(CreateATaskOnUI(new_task));
            }
            e.target.value = '';
        }
    }
}

const createNewTaskOnStorage = (task) => {
    tasks.push(task);
    if(currentFilter === DEFAULT_FILTER){
        filteredTasks.push(task)
    }
    window.localStorage.setItem(APP , JSON.stringify(tasks));
}

const deleteTask = (e) => {
    const task_id = e.target.parentElement.parentElement.id;
    tasks = tasks.filter(task => task.id !== task_id);
    window.localStorage.setItem(APP , JSON.stringify(tasks));
    applyFilter(currentFilter);
}

const changeStatus = (e,status) => {
    const task_id = e.target.parentElement.parentElement.id;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id === task_id){
            tasks[i].status = status;
            break;
        }
    }
    window.localStorage.setItem(APP , JSON.stringify(tasks));
    applyFilter(currentFilter);
}

const changeTaskName = (e) => {
    const taskName = e.target.textContent;
    const task_id = e.target.parentElement.id;
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].id === task_id){
            tasks[i].name = taskName;
            break;
        }
    }
    window.localStorage.setItem(APP , JSON.stringify(tasks));
}