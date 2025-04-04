import React, {useState} from 'react'

import './Counter.css'
import Button from './Button'

const Counter = (props) => {

    const {text} = props

    const [counter, setCounter] = useState(0)

    const decreaseCounter = () => {
      setCounter(counter-1)
      console.log(`decrease ${text} -> ${counter-1}`)
    }
    const increaseCounter = () => {
      setCounter(counter+1)
      console.log(`increase ${text} -> ${counter+1}`)
    }

    // here we have a mix of actual HTML tags (in lowercase)
    // and of components tags(Button, in CamelCase)
    return (
        <div class="counter">
          <span class="label">{text} ({counter})</span>
          <div class="buttons">
            <Button text="-" type="decrease" onClick={decreaseCounter} />
             {/* here {counter} is automatically updated
                 each time we call setCounter */}
            <span class="value">{counter}</span>
            <Button text="+" type="increase" onClick={increaseCounter} />
          </div>
        </div>
      )
}

export default Counter
