const { query, body, validationResult, check } = require('express-validator')


const saveValidations = [
    check('titleTask')
    .notEmpty().withMessage("O titulo da task é obrigatório")
    .isLength({ min: 4 })
    .withMessage('O titulo da tarefa deve ter no minimo 5 caracteres')
    .isLength({ max: 50 })
    .withMessage('O titulo da tarefa deve ter no máximo 50 caracteres'),

    check('descriptionTask')
    .isLength({ max: 150 })
    .withMessage('O titulo da tarefa deve ter no máximo 150 caracteres'),

    check('startDateTask')
    .notEmpty().withMessage("A data de inicio da task é obrigatório"),

    check('endDateTask')
    .notEmpty().withMessage("A data de fim da task é obrigatório")    
]

const updateValidations = [
    query('idTask')
    .notEmpty().withMessage("O id da task é obrigatório"),

    check('titleTask')
    .isLength({ min: 4 })
    .withMessage('O titulo da tarefa deve ter no minimo 5 caracteres')
    .isLength({ max: 50 })
    .withMessage('O titulo da tarefa deve ter no máximo 50 caracteres'),

    check('descriptionTask')
    .isLength({ max: 150 })
    .withMessage('O titulo da tarefa deve ter no máximo 150 caracteres')
]

const destroyValidations = [
    query('idTask')
    .notEmpty().withMessage("O id da task é obrigatório"),
]

const getTaskByIdValidations = [
    query('idTask')
    .notEmpty().withMessage("O id da task é obrigatório"),
]

module.exports = { saveValidations, updateValidations, destroyValidations, getTaskByIdValidations }