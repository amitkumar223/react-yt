import React from 'react'
import Navbar from './Navbar'
import Rightcontant from './Rightcontant'
import Leftcontant from './Leftcontant'

const Page1containt = () => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh]  px-18'>

        <Leftcontant />
        <Rightcontant />
            </div>
  )
}

export default Page1containt
