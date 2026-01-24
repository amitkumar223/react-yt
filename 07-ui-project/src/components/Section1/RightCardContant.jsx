import React from 'react'

const RightCardContant = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">

       <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id}</h2>
       <div>
         <p className='text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti aperiam, quibusdam fugiat consequuntur unde dolor,  </p>
         <div className='flex justify-between'>
           <button style={{ backgroundColor: props.color }} className=' text-white font-medium px-8 py-3 rounded-full '>{props.tag}</button>
              <button className=' text-white font-medium px-5 py-3 rounded-full'><i className="ri-arrow-right-line "></i></button>
         </div>
        </div>   

      </div>
    </div>
  )
}

export default RightCardContant
