import React from "react";

const DEFAULT_TODO = {
    name: '',
    description: ''
}

interface TodoPanelProps{
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
}

export const TodoPanel : React.FC<TodoPanelProps> = ({addTodo}) => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO);
    // console.log('@todo',todo)
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setTodo({...todo, [name]: value});
    }

    const onClick = () => {
        addTodo({name: todo.name ,description: todo.description});

        setTodo(DEFAULT_TODO)
    }

    return (
        <div>
            <div>
                <label htmlFor="name">
                    <div>name</div>
                    <input type="text" name="name" id="name" onChange={onChange} value={todo.name}/>
                </label>
            </div>
            <div>
                <label htmlFor="description">
                    <div>description</div>
                    <input type="text" id="description" name="description" onChange={onChange} value={todo.description}/>
                </label>
            </div>
            <div>
                <button onClick={onClick}>ADD</button>
            </div>
        </div>
    )
} 