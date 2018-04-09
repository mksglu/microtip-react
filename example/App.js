import React from "react"
import Tooltip from "microtip-react"
import "./App.css"

const App = () => (
  <div className="tooltipContainer">
    <Tooltip
      label="Hi!"
      position="right"
      size="small"
      duration="0.5s"
      delay="0.2s"
      fontWeight="bold"
      textTransform="capitalize"
    >
      <button>My Button</button>
    </Tooltip>
  </div>
)

export default App
