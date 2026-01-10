import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className="parent">
     
      <Card  user='amit' age={25} img="https://images.unsplash.com/photo-1690743300187-51d68146adf7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG1hY2Jvb2slMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" />
    <Card  user='john' age={28} img="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9vayUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D" />
    <Card  user='doe' age={30} img="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fG1hY2Jvb2slMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D" />
    </div>
  )
}

export default App
