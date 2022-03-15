const db=require('../../config/database')

const save = async (params) => {
    const databaseResponse = await db.insert(params).into("task")
    console.log(databaseResponse)
    return databaseResponse
}
module.exports = {
    save
}