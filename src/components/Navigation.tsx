import React from 'react'

function Navigation() {
  return (
    <div className='flex gap-2 mt-5'>
      <div className="add w-1/4 bg-green-700 rounded-2xl">
        <h1 className=' text-5xl'>+</h1>
      </div>
      <div className="search w-3/4">
        <input className='p-4 w-full rounded-2xl indent-3' type="text" placeholder='Search...' />
      </div>
    </div>
  )
}

export default Navigation