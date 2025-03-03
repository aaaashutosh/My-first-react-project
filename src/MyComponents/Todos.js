import React from 'react'
import {TodoItem} from "./TodoItem"
export const Todos = (props) => {
  let myStyle={
    minHeight:"70vh",
    margin:"50px auto"
  }
  return (
    <div className='container' style={myStyle} >
      <h3 className="my-3"> Tasks pending:</h3>
      {props.todos.length===0? "Nothing to do":
      props.todos.map((todo)=>{
        return (
          <>
        <TodoItem todo={todo} onDelete={props.onDelete} /> <hr /></>
      )})}
    </div>
  )
}
