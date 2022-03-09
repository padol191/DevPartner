import React from 'react'

export default function kanban() {
  return (
    <div className='w-[80vw]'>
        <div className='flex justify-evenly'>
            <h1 className='text-2xl'>In Progress</h1>
            <h1 className='text-2xl'>Done</h1>
        </div>
        <div className='bg-gray-500'>
            <div className='bg-white w-[100%]'>
                <p className='text-2xl'>Task #1</p>
                <p className='text-lg float-left'>Darsh Shah</p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}
