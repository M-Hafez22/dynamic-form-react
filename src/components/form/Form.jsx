import React, { useContext } from "react"
import Feild from "./Field"
import { UserInputContext } from "../../contexts/userInput"

export default function Form() {
  const [{ formItems }, setFormItems] = useContext(UserInputContext)
  const feilds = formItems.map(
    (item, i) =>
      item.type &&
      item.name && <Feild type={item.type} key={item.name} text={item.name} />
  )

  return (
    <form className="form">
      {feilds}
    </form>
  )
}
