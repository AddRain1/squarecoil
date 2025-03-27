"use client";

import { FaPlus } from 'react-icons/fa6';
import CreateTaskModal from './Modal';
import { useState } from 'react';

const AddTask = () => {
    return (
        <div>
            <button className="btn btn-primary w-full" onClick={()=>{
                const modal = document.getElementById('my_modal_3');
                if (modal instanceof HTMLDialogElement) modal.showModal();
            }}>Add New Task<FaPlus size={12}/></button>
            <CreateTaskModal />
        </div>
    );
};

export default AddTask;