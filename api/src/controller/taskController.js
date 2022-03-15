const {validationResult} = require('express-validator');
const taskService = require('../services/taskService')

module.exports = app => {

    const save = async (request, response) => {
        try {
            const errors = validationResult(request)
            if (!errors.isEmpty()) {
                response.status(400).json({ errors: errors.array() })
                response.send();
            }
            const result = await taskService.save(request, response)
            return response.status(201).json({
                'data': result,
                'message': "success create task"
            }).send()
        } catch (error) {
            return response.status(500).send(`INTERNAL SERVER ERROR: ${error}`)
        }
    }

    const update = async (request, response) => {
        try {

        } catch (error) {
            return response.status(500).send(`INTERNAL SERVER ERROR: ${error}`)
        }
    }

    return { save, update }
}