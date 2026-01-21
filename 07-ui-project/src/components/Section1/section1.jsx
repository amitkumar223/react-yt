import Navbar from './Navbar'
import Page1containt from './Page1containt'



const Section1 = (props) => {
  
  return (
    <div className='h-screen w-full'>

      <Navbar/>
      <Page1containt users={props.users}/>
    
    </div>
  )
}

export default Section1
