import React from 'react'
import {ITodo} from "../../interfaces";

type TodoProps = {
    todo: ITodo,
    deleteHandler: (id:number) => void
}

const TodoItem:React.FC<TodoProps> = ({todo, deleteHandler}) => (
    <li>
        <input type='checkbox' checked={todo.completed}/>
        <span>{todo.text}</span>
        <i onClick={deleteHandler.bind(null, todo.id)} className="material-icons prefix">delete</i>
    </li>
)

export default TodoItem