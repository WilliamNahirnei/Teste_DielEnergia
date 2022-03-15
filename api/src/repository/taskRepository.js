const db = require('../../config/database')

const save = async (params) => {
    const databaseResponse = await db('task').insert(params)
    return databaseResponse[0]
}

const update = async (params) => {
    const databaseResponse = await db('task')
    .where(params.idTask)
    .update(params.newData)
    return databaseResponse[0]
}

const getAllTask = async () => {
    const databaseResponse = await db.select().table('task')
    return databaseResponse
}

const getTaskById = async (idTask) => {
    const databaseResponse = await db.select().table('task').where('idTask', idTask)
    return databaseResponse[0]
}

module.exports = {
    save,
    getAllTask,
    getTaskById,
    update
}