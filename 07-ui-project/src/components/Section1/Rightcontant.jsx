
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'

const Rightcontant = (props) => {
  console.log(props.users);
  return (
    <div id='right' className='h-full  flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3  '>
     {props.users.map(function(elem,idx){


    return <RightCard key={idx} color={elem.color} id={idx + 1} img={elem.img} tag={elem.tag} />;
     })}
    </div>
  )
}

export default Rightcontant
