import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
    return(
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button class="btn btn-danger btn-sm" onClick = {onDelete}>Delete</button>
        </div>
    )
}