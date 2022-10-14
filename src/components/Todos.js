import React from 'react'
import Todo from './Todo'
import style from './Todos.module.css';

export default function Todos(props) {
  return (
    <section className={style.todos}>
        {
            props.todos.map((todo)=> <Todo todo={todo.todo} id={todo.id} key={todo.id} onRemoveItem={props.onRemoveTodo}/>)
        }
    </section>
  )
}
