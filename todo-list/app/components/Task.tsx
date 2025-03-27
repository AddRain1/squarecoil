import { iTask } from '../types';

interface TaskProps {
    task: iTask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <tr key={task.id}>
            <td>{task.text}</td>
            <td>Blue</td>
        </tr>
    );
};

export default Task;