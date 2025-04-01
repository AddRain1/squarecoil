import { useState, FormEventHandler } from "react";
import { addTask } from "../api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';

const CreateTaskModal = () => {
    // this component is a modal that allows the user to create a new task
    // useState is a hook that allows you to add state to a functional component
    const [newTaskValue, setNewTaskValue] = useState<string>('');

    const router = useRouter();

    // FormEventHandler is a type that represents a function that handles form events
    // e is the event that is passed to the function
    // HTMLFormElement is a type that represents a form element in HTML
    const handleTaskSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        // default behavior is to reload the page when the form is submitted, so we prevent it
        e.preventDefault();
        await addTask({
            id: uuidv4(),
            text: newTaskValue,
        });
        setNewTaskValue('');
        router.refresh(); // refresh the page to show the new task
    };

    return (
        <>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById('my_modal_3').close()}
                    >
                        ✕
                    </button>
                </form>
                <input 
                    value={newTaskValue}
                    // onChange is a function that is called when the value of the input changes
                    onChange={(e) => setNewTaskValue(e.target.value)}
                    type="text" 
                    placeholder="Type here" 
                    className="input" 
                />
                <form onSubmit={handleTaskSubmit}>
                    <button 
                        type="submit" 
                        className="btn btn-primary w-full"
                        onClick={() => document.getElementById('my_modal_3').close()}
                    >
                        Submit
                    </button>
                </form>
                    
            </div>

        </dialog>
        </>
    );
};

export default CreateTaskModal;