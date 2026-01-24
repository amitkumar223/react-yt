import React from 'react'

const App = () => {
  function btnclick() {
    console.log("Button is Clicked");
  }
  return (
    <div>
      {/* <h1>Hello,Amit</h1>
      <button onClick={btnclick}>Change User</button> */}
      <button onClick={btnclick}>Click here</button>
    </div>
  )
}

export default App
