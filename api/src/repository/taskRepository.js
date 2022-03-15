const db = require('../../config/database')

const save = async (params) => {
    const databaseResponse = await db('task').insert(params)
    return databaseResponse[0]
}
module.exports = {
    save
}