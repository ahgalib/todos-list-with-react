import React from 'react'
 import {TodoItem} from './TodoItem'

export const Todos = ({todos,onDelete}) => {
    return (
        <div className="container">
            <h3>All the todo are here(Todos list)</h3>
            
            {/* <TodoItem todo={todos[0]}/> */}
            {todos.map((todos)=>{
                return <TodoItem todo={todos} onDelete = {onDelete}/>
            })}
        </div>
    )
}