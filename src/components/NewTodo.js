import React, { useState } from 'react';
import style from './newtodo.module.css';


export default function NewTodo(props) {
  const  handleSubmit=(e)=>{
        props.onAddTodo(todo);
        setTodo({title:"",desc:""});
        e.preventDefault();
    }

const handleChange=(e)=>{
    const name=e.target.name;
    setTodo((oldTodo)=>{
        return {...oldTodo, [name]:e.target.value}
    })
}
    const [todo,setTodo]=useState({title:"",desc:""});
    const {title,desc}=todo;
  return (
    <form className={style.form} onSubmit={handleSubmit}>
        <div className={style["form-field"]}> 
            <label>Title</label>
            <input type= "text" id='title' name='title' value={title} onChange={handleChange}/>
        </div>
        <div className={style["form-field"]}>
            <label>Description</label>
            <textarea type= "text" id='desc' name='desc' value={desc} onChange={handleChange}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}
