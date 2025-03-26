import { FaPlus } from 'react-icons/fa6';

interface AddTaskProps {
    addTask: (task: string) => void;
}

function AddTask({ addTask }: AddTaskProps) {
    return (<div>
        <button className="btn btn-primary w-full">Add New Task
        <FaPlus size={12}/></button>
    </div>
    );
};

export default AddTask;