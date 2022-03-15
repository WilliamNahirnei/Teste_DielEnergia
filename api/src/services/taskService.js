const taskPrepare = require('../prepare_data/prepareTask')
const taskRepository = require('../repository/taskRepository')
const Task = require('../model/Task')


const save = async (request, response) => {
    const preparedData = await taskPrepare.prepareSave(request)
    const idTask = await taskRepository.save(preparedData)
    const task = new Task(idTask, preparedData.titleTask, preparedData.descriptionTask, preparedData.startDateTask, preparedData.endDateTask, preparedData.statusTask)
    return task
}

module.exports = {
    save
}