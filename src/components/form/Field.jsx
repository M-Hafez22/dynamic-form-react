import React, { useState, useContext } from "react"
import { UserInputContext } from "../../contexts/userInput"

export default function Form({ type, text}) {
  const [{ formItems }, setFormItems] = useContext(UserInputContext)

  const [value, SetValue] = useState("")
  
  const changeState = event => {
      SetValue(event.target.value)
      const newFormItems = formItems.map(item => item.name === text ? {...item, value : event.target.value} : item)
      setFormItems([...newFormItems])
  }

  return (
    <div className="input">
      <input
        type={type}
        value={value}
        onChange={changeState}
        name={text}
        id={type}
        autoComplete='off'
        required
      />
      <label
        // Show unvalid values
        style={value.length > 0 ? { top: 0 } : { top: "" }}
      >
        {text}
      </label>
    </div>
  )
}
