import React, { useContext } from "react"
import { UserInputContext } from "../contexts/userInput"

function Result() {
  const [{ formItems }, setFormItems] = useContext(UserInputContext)
  const feildsOut = formItems.map(
    item =>
      item.name && (
        <p key={item.name}>
          {item.name}: <span>{item?.value}</span>
        </p>
      )
  )
  return (
    <div className="userinfo">
      <h1>UserInfo</h1>
      <div>{feildsOut}</div>
    </div>
  )
}

export default Result
