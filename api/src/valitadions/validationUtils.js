
const mountErrorMessage = (errorList)  => {
    const messageArray = errorList.map((erro) => {
        return erro.msg
    })
    return messageArray
}

module.exports = {
    mountErrorMessage
}