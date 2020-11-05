import React, { useState } from 'react';
import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodoItem, todoDone}) {

    return (
        <ul>
            {
                todos.map((item, index) => (
                    <TodoItem id={item.id} done={item.done} text={item.text} deleteTodoItem={deleteTodoItem} todoDone={todoDone}/>
                ))
            }
        </ul>
    );

}

export default TodoList;