import React from 'react'
import Todo from './Todo'
function TodoItems(notes:any) {
  return (
    <div className='container'>
      <div className='flex items-center'>
        <h1 className='text-3xl'>Todo items -</h1> 
        <div className='flex flex-col'>
            <span className='text-red-600 up text-3xl'>▲</span>
            <span className='text-red-600 down text-3xl'>▼</span>
          </div>
          <span className='text-3xl'>🕒</span>
      </div>
      <div>
      <Todo/>
      </div>
    </div>
  )
}

export default TodoItems