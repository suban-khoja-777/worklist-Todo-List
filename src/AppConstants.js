const STATUS = {
    NOT_STARTED : 'Not Started',
    IN_PROGRESS : 'In Progress',
    COMPLETED : 'Completed',
}

const APP_CONSTANT = {
    APP : 'TODO_LIST',
    DEFAULT_STATUS : 'ns',
    DEFAULT_FILTER : 'ns',
    APP_NAME : 'worklist',
    DEV_NAME : 'suban khoja',
    
    Status_Full : {
        'ns' : STATUS.NOT_STARTED,
        'ip' : STATUS.IN_PROGRESS,
        'cp' : STATUS.COMPLETED
    },

    Status_Acr : {
        [STATUS.NOT_STARTED] : 'ns',
        [STATUS.IN_PROGRESS] : 'ip',
        [STATUS.COMPLETED] : 'cp'
    }

}


export default APP_CONSTANT;