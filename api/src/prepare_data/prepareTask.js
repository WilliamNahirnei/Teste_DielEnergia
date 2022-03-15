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

const prepareGetTaskById = async (request) => {
    const queryParams = {...request.query}
    return queryParams.idTask
}

module.exports = {
    prepareSave,
    prepareGetTaskById
}