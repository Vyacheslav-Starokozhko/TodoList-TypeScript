import React from "react";


interface TodoItemProps {
    todo : Todo
}

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    return(

        <li>{todo.name}</li>
    )
}