
import {get, put, post} from '../api-conector'

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

const getAllTask = async () => {
    const route = "/task-all"
    const { data } = await get(route)
    return data.data
}

const storeTask = async (taskData) => {
    const route = "/task"
    return await post(
      route,
      taskData
    )
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
    getAllTask,
    storeTask,
    updateTask
}