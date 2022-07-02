import React from 'react';
import './AddStory.css';
import { AiOutlinePlus } from "react-icons/ai";


const AddStrory = () => {
    return (
        <div className='addStory'>
            <button>
                <AiOutlinePlus />
            </button>
        </div>
    );
};

export default AddStrory;