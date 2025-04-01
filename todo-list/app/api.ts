import { iTask } from "./types"

const baseURL = "http://localhost:3001"

export const getAllTasks = async (): Promise<iTask[]> => {
    const response = await fetch(`${baseURL}/tasks`, {cache: 'no-store'});
    const tasks = response.json();
    return tasks
}

export const addTask = async (task: iTask): Promise<iTask> => {
    const res = await fetch(`${baseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    const newTask = await res.json()
    return newTask
}

export const completeTask = async (id: string): Promise<void> => {
    await fetch(`${baseURL}/tasks/${id}`, {
        method: 'DELETE',
    })
}