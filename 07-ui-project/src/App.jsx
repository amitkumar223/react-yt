import React from 'react'
import Section1 from './components/Section1/section1'
import Section2 from './components/Section2/section2'


const App = () => {

  const users = [
    {
      img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Satisfied',
      color:'black'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'underserved',
      color:'#007bff'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661766718711-95bb89e53594?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'underbanked',
      color:'#28a745'   
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661572809225-b2ed997bf708?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHdvcmtlcnMlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D',
      intro:'',
      tag:'overdraft',
      color:'#dc3545'
    },
    {
      img:'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'loans',
      color:'#ffc107'
    }
  ];
  return (
    <div>

    <Section1 users={users}/>
    <Section2/> 
    </div>
  )
}

export default App
