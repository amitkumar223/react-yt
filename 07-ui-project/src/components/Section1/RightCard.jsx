import React from 'react'

const RightCard = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">

       <h2 className='bg-white text-2xl font-bold rounded-full h-14 w-14 flex justify-center items-center'>1</h2>
       <div>
         <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti aperiam, quibusdam fugiat consequuntur unde dolor, quam adipisci assumenda esse aliquam dignissimos voluptatibus eveniet harum! </p>
         <div className='flex justify-between'>
           <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full '>Setisfied</button>
              <button className='bg-blue-600 text-white font-medium px-5 py-3 rounded-full'><i className="ri-arrow-right-line "></i></button>
         </div>
        </div>   

      </div>
    </div>
  )
}

export default RightCard
