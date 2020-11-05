import React, { useState } from 'react';
import TodoItem from "./TodoItem";

function TodoList({todos}) {

    return (
        <ul>
            {
                todos.map((item, index) => (
                    <TodoItem id={item.id} done={item.done} text={item.text}/>
                ))
            }
        </ul>
    );

}

export default TodoList;