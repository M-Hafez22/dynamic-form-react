import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { UserInputProvider } from "./contexts/userInput"
import { ThemeProvider } from "./contexts/theme"
import "./assets/main.scss"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserInputProvider>
        <App />
      </UserInputProvider>
    </ThemeProvider>
  </React.StrictMode>
)
