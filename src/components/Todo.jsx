
import React, { useState } from 'react';
import Checkbox from './Checkbox';


const Todo = ({ name, done, onToggle, onTrash }) => {
    const [editMode, setEditMode] = useState(false);

    return (
        <div className={'task ' + (done ? 'done' : '')}>
            <Checkbox className="checkbox" checked={done} onClick={() => onToggle(!done)} />
            {!editMode && (
                <div className="task-name" >
                    <span>{name}</span>
                </div>
            )}
            {editMode && (
                <form onSubmit={event => { event.preventDefault(); setEditMode(false); }}>
                    <input type="text" value={name}
                    />
                </form>
            )}
            <button className="deleteBtn" onClick={onTrash}>
                Delete
            </button>
        </div>
    );
};

export default Todo;