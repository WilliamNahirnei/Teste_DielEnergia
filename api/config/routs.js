const taskValidatior = require('../src/valitadions/taskValidations')
module.exports = app => {
    app.route('/status')
        .get((req, res)=>{res.send('ONLINE')})

    app.route('/task')
        .post(taskValidatior.saveValidations, app.src.controller.taskController.save)
        .put(app.src.controller.taskController.update)

}