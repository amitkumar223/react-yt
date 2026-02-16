import React from 'react'

const App = () => {
  function btnclick() {
    console.log("Button is  Clicked");
  }
   function mouseEnter() {
    console.log("Mouse Entered");
  }
  return (
    <div>
      <button onMouseEnter={mouseEnter} onDoubleClick={btnclick}>Click on this</button>
    </div>

  )
}

export default App
