import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { UserInputProvider } from "./contexts/userInput"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserInputProvider>
      <App />
    </UserInputProvider>
  </React.StrictMode>
)
