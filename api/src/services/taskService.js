const taskPrepare = require('../prepare_data/prepareTask')
const taskRepository = require('../repository/taskRepository')


const save = async (request, response) => {
    taskPrepare.prepareSave(request)
    return taskRepository.save()
}

module.exports = {
    save
}