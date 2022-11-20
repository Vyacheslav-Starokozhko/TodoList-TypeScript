import React from 'react';

import './App.css';
import {Header} from "./components/Header";
import {TodoPanel} from "./components/TodoPanels/TodoPanel";
import {TodoList} from "./components/TodoList/TodoList";

let DEFAULT_TODO_LIST = [
    {id: 1, name: 'tast 1', description: '', checked: false},
    {id: 2, name: 'tast 2', description: '', checked: false},
    {id: 3, name: 'tast 3', description: '', checked: true}
];


export const App = () => {
    const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

    const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
        setTodos([...todos, {id: todos[todos.length - 1].id + 1,description: description,name: name,checked: false}]);
    }

    return (
        <div className="App">
            <Header todoCount={todos.length}/>
            <TodoPanel addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </div>
    );
}

export default App;
