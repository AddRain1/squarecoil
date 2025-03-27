import { getAllTasks} from './api';
import AddTask from './components/AddTask';
import ToDoList from './components/ToDoList';

export default async function HomePage() {
    const tasks = await getAllTasks();
    
    return (
        <main className='m-0 p-0 min-h-screen bg-white text-black max-w-4xl mx-auto'>
            <div className="text-center my-5 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Todo-List</h1>
                <AddTask />
            </div>
            <ToDoList tasks = {tasks}/>
        </main>
    )
}
