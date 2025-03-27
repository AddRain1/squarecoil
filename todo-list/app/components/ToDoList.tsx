import { iTask } from "../types";
import React from "react";
import Task from "./Task";

// Define the interface for the ToDoList component
// The interface is used to define the structure of the props that the component will receive
interface TodoListProps {
    tasks: iTask[];
}

// ensures that tasks is always passed in as an array of iTask objects
const ToDoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-black">Name</th>
                        <th className="text-black">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToDoList;