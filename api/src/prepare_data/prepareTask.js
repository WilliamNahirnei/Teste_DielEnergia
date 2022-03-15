const prepareSave = async (request) => {
    const requestBody = {...request.body}
    return {
        "titleTaks": requestBody.titleTask,
        "descriptionTask": requestBody.descriptionTask,
        "startDateTask": requestBody.startDate,
        "endDateTask": requestBody.startDate,
        "status": requestBody.startDate
    }
}
module.exports = {
    prepareSave
}