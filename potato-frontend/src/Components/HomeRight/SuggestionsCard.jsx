import React from 'react'

function SuggestionsCard() {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center'>
            <img className='w-9 h-9 rounded-full' src="https://images.pexels.com/photos/12774064/pexels-photo-12774064.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className='ml-2'>
                <p className='text-sm font-semibold'>username</p>
                <p className='text-sm font-semibold opacity-70m'>Follows u</p>
            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionsCard