import React from 'react'
import {ITodo} from "../../interfaces";

type TodoListProps = {
    todos: ITodo[]
}

const TodosList:React.FC<TodoListProps> = ({todos}) => {
    const elements = todos.map(todo => {

        return
    })

    return (
        <ul>
            {elements}
        </ul>
    )
}