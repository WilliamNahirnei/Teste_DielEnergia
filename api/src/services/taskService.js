const taskPrepare = require('../prepare_data/prepareTask')
const taskRepository = require('../repository/taskRepository')
const Task = require('../model/Task')


const save = async (request, response) => {
    const preparedData = await taskPrepare.prepareSave(request)
    const idTask = await taskRepository.save(preparedData)
    const task = new Task(idTask, preparedData.titleTask, preparedData.descriptionTask, preparedData.startDateTask, preparedData.endDateTask, preparedData.statusTask)
    return task
}

const update = async (request, response) => {

    if (! await validateToUpdate(request, response)) {
        return false
    } 

    const preparedData = await taskPrepare.prepareUpdate(request)
    const result = await taskRepository.update(preparedData)
    const task = new Task(
        preparedData.idTask,
        preparedData.newData.titleTask,
        preparedData.newData.descriptionTask, 
        preparedData.newData.startDateTask,
        preparedData.newData.endDateTask,
        preparedData.newData.statusTask,
    )
    return task
}

const destroy = async (request, response) => {

    if (! await validateToDestroy(request, response)) {
        return false
    } 

    const preparedData = await taskPrepare.prepareDestroy(request)
    return await taskRepository.destroy(preparedData)
}

const getAllTask = async (request, response) => {
    const taskResultsDatabase = await taskRepository.getAllTask()
    let tasklist = []
    tasklist = taskResultsDatabase.map( (row)=>{
        return new Task(row.idTask, row.titleTask, row.descriptionTask, row.startDateTask, row.endDateTask, row.statusTask)
    })
    return tasklist
}

const getTaskById = async (request, response) => {

    const preparedData = await taskPrepare.prepareGetTaskById(request)

    const taskResultsDatabase = await taskRepository.getTaskById(preparedData)
    if(!taskResultsDatabase){
        return null
    } else {
        return new Task(
            taskResultsDatabase.idTask,
            taskResultsDatabase.titleTask, 
            taskResultsDatabase.descriptionTask, 
            taskResultsDatabase.startDateTask, 
            taskResultsDatabase.endDateTask, 
            taskResultsDatabase.statusTask
        )
    }

}

const validateToUpdate = async (request, response) => {
    const existTask = await validateExistTask(request, response)

    return existTask
}

const validateExistTask = async (request, response) => {

    const task = await getTaskById(request, response)
    if (!task) {
        response.status(404).json({
            messages: ['Task not found']
        })
        return false
    } else {
        return true
    }

}

const validateToDestroy = async (request, response) => {
    const existTask = await validateExistTask(request, response)

    return existTask
}

module.exports = {
    save,
    update,
    destroy,
    getAllTask,
    getTaskById
}