const taskValidatior = require('../src/valitadions/taskValidations')
module.exports = app => {
    app.route('/status')
        .get((request, response)=>{response.send('ONLINE')})

    app.route('/task')
        .get(app.src.controller.taskController.getTaskById)
        .post(taskValidatior.saveValidations, app.src.controller.taskController.save)
        .put(app.src.controller.taskController.update)

    app.route('/task-all')
        .get(app.src.controller.taskController.getAllTask)

}