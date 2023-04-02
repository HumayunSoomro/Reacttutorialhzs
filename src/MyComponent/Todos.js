import React from 'react'
import { TodoItem } from '../MyComponent/TodoItem';



export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className=' my-4'>Todos List</h3>
      {props.todos.length === 0 ? "No todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} onDelete={props.onDelete} /> <hr />
            </>
          )
        })
      }

    </div>
  )
}
