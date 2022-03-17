
import {get, put} from '../api-conector'

const getTaskById = async (idTask) => {
    const route = "/task"
    const { data } = await get(
      route,
      {
        idTask
      }
    )
    return data.data
}

const updateTask = async (idTask, taskData) => {
    const route = `/task?idTask=${idTask}`
    return await put(
      route,
      taskData
    )

}

export {
    getTaskById,
    updateTask
}