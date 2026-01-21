
import Rightcontant from './Rightcontant'
import Leftcontant from './Leftcontant'

const Page1containt = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 h-[90vh]  px-18'>

        <Leftcontant />
        <Rightcontant users={props.users}/>
            </div>
  )
}

export default Page1containt
