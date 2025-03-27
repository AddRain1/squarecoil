import { iTask } from "./types"

const baseURL = "http://localhost:3001"

export const getAllTasks = async (): Promise<iTask[]> => {
    const response = await fetch(`${baseURL}/tasks`)
    const tasks = response.json()
    return tasks
}