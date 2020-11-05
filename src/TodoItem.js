import React, { useState } from 'react';

function TodoItem({id, done, text}) {

    return (
        <li key={id}>
            <span className={done ? 'done' : 'undone'}>&#9675;</span>
            {text}
            <span className="remove">X</span>
        </li>
    );

}

export default TodoItem;