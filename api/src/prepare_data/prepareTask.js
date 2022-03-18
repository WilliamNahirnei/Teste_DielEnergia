const prepareSave = async (request) => {
    const requestBody = {...request.body}
    return {
        "titleTask": requestBody.titleTask,
        "descriptionTask": requestBody.descriptionTask || "",
        "startDateTask": requestBody.startDateTask,
        "endDateTask": requestBody.endDateTask,
        "statusTask": "SCHEDULED"
    }
}

const prepareUpdate = async (request) => {
    const requestBody = {...request.body}
    const queryParams = {...request.query}

    const newData = {}
    
    if (requestBody.titleTask)
        newData.titleTask = requestBody.titleTask
    if(requestBody.descriptionTask)
        newData.descriptionTask = requestBody.descriptionTask
    if(requestBody.startDateTask)
        newData.startDateTask = requestBody.startDateTask
    if(requestBody.endDateTask)
        newData.endDateTask = requestBody.endDateTask
    if(requestBody.statusTask)
        newData.statusTask = requestBody.statusTask

    return {
        idTask: queryParams.idTask,
        newData: newData
    }
}

const prepareDestroy = async (request) => {
    const queryParams = {...request.query}
    return queryParams.idTask
}

const prepareGetTaskById = async (request) => {
    const queryParams = {...request.query}
    return queryParams.idTask
}

module.exports = {
    prepareSave,
    prepareUpdate,
    prepareDestroy,
    prepareGetTaskById
}