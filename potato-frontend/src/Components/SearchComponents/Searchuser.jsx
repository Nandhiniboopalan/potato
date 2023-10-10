import React from 'react'

function Searchuser() {
  return (
    <div className='py-2 cursor-pointer'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded-full' src="https://images.pexels.com/photos/18101851/pexels-photo-18101851/free-photo-of-border-collie-dog-standing-in-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
            <div className='ml-3'>
                <p>
                    Full Name
                </p>
                <p className='opacity-70'>username</p>
            </div>
        </div>
    </div>
  )
}

export default Searchuser