import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css';
import NewTodo from './NewTodo';
import {v4 as uuidv4} from 'uuid';


export default function Home() {
    const [todos,setTodos]=useState([]);
    const handleAddTodo=(todo)=>{
        setTodos((previousTodos)=>{
            return [...previousTodos,{id:uuidv4(), todo}]
        })
    }
    const handleRemoveTodo=(id)=>{
    
     setTodos((prevTodos)=>{
        const filtertedTodo=prevTodos.filter((todo)=>todo.id !== id);
        return filtertedTodo;
     });
    }
  return (
    <div className={style.container}>
        <h1 style={{ color: "white" }}>Todo App</h1>
        <NewTodo onAddTodo={handleAddTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}
