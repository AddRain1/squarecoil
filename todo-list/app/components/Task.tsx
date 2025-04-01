"use client";

import { iTask } from '../types';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { completeTask } from '../api';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface TaskProps {
    task: iTask
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const [isVisible, setIsVisible] = useState(true);
    const router = useRouter();

    const handleComplete = async () => {
        await completeTask(task.id);
        router.refresh(); // Refresh the page to reflect the completed task
        setIsVisible(false); // Hide the task after completion
    };
    
    if (!isVisible) return null; // If the task is not visible, don't render it

    return (
        <tr key={task.id}>
            <td className="w-full">{task.text}</td>
            <td className="flex justify-center">
                <IoIosCheckmarkCircleOutline onClick={() => handleComplete()} cursor="pointer" size={25} />
            </td>
        </tr>
    );
};

export default Task;