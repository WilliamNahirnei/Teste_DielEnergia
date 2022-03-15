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
    const preparedData = await taskPrepare.prepareUpdate(request)
    const idTask = await taskRepository.update(preparedData)
    const task = new Task(
        preparedData,idTask,
        preparedData.newData.titleTask,
        preparedData.newData.descriptionTask, 
        preparedData.newData.startDateTask,
        preparedData.newData.endDateTask,
        preparedData.newData.statusTask,
        preparedData.newData.statusTask)
    return task
}

const getAllTask = async (request, response) => {
    const taskResultsDatabase = await taskRepository.getAllTask()
    const tasklist = []
    tasklist = taskResultsDatabase.map( (row)=>{
        return new Task(row.idTask, row.titleTask, row.descriptionTask, row.startDateTask, row.endDateTask, row.statusTask)
    })
    return tasklist
}

const getTaskById = async (request, response) => {
    const preparedData = await taskPrepare.prepareGetTaskById(request)
    const taskResultsDatabase = await taskRepository.getTaskById(preparedData)
    return new Task(
        taskResultsDatabase.idTask,
        taskResultsDatabase.titleTask, 
        taskResultsDatabase.descriptionTask, 
        taskResultsDatabase.startDateTask, 
        taskResultsDatabase.endDateTask, 
        taskResultsDatabase.statusTask
    )

}

module.exports = {
    save,
    getAllTask,
    getTaskById
}