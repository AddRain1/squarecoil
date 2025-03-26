import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

export default function HomePage() {
    // state to store tasks in tasks array, where each task is an object with an id and a task, and initialized as an empty array
    const [tasks, setTasks] = useState<{id:Number; task:String}[]>([]);

    // function to handle adding tasks
    const addTask = (task: String) => {
        const newTask = { id: tasks.length + 1, task };
        // ...tasks is a spread operator that copies the tasks array
        // and adds the new task to the end of the array
        setTasks([...tasks, newTask]);
    }

    return (
        <main className='m-0 p-0 min-h-screen bg-white text-black max-w-4xl mx-auto'>
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Todo-List</h1>
                <AddTask addTask={addTask} />
            </div>
            <ToDoList tasks={tasks}/>
        </main>
    )
}