import React, {useState} from 'react'

import logo from './logo.svg'
// explicit import of css
import './App.css'

import Counter from './components/Counter'

function App() {

  // some sort of mix between JS and HTML
  return (
    <div className="toplevel">
      <Counter text="temperature" />
      <Counter text="pressure" />
    </div>
  )
}

export default App
