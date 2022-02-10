import React from 'react'
export const Todo = ({todo,onDelete}) =>{
    return (
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.description}</p>
           <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
    )
}