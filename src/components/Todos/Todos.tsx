import React, {useEffect, useState} from 'react'
import Input from "../Input/Input";
import {ITodo} from "../../interfaces";

const Todos: React.FC = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
    }, [])

    const addTodo = (text: string) => {
        const newTodo:ITodo = {
            id: Date.now(),
            text,
            completed: false
        }
        setTodos(prev => [newTodo, ...prev]);
    }

    return (
        <>
            <Input placeholder={'Add todo'} iconName={'create'} onKeyPress={addTodo}/>
        </>
    )
}

export default Todos;