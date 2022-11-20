import React from "react";
import {TodoItem} from "./TodoItem/TodoItem";

interface TodoListProps {
    todos : Todo[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return(
        <ul>
            {todos.map((todo) => (
                <TodoItem todo = {todo} key = {todo.id}/>
            ))}
        </ul>
    )
}