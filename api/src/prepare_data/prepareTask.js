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
    return {
        idTask: queryParams.idTask,
        newData: {
            "titleTask": requestBody.titleTask,
            "descriptionTask": requestBody.descriptionTask || "",
            "startDateTask": requestBody.startDateTask,
            "endDateTask": requestBody.endDateTask,
            "statusTask": requestBody.statusTask,
        }
    }
}

const prepareGetTaskById = async (request) => {
    const queryParams = {...request.query}
    return queryParams.idTask
}

module.exports = {
    prepareSave,
    prepareUpdate,
    prepareGetTaskById
}