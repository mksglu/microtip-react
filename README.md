# microtip-react

## Getting started

[![react-simple-tooltip](https://nodei.co/npm/microtip-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/microtip-react)

## Demo

[Try it out](https://stark-shore-89144.herokuapp.com/)

![Alt Text](https://thumbs.gfycat.com/SophisticatedDependableFlycatcher-size_restricted.gif)

## Installation

**via npm**

```shell
npm install microtip-react --save
```

## Usage

### Attached to a Component

```javascript
import React from "react"
import Tooltip from "microtip-react"
import "./App.css"

const App = () => (
  <div className="tooltipContainer">
    <Tooltip
      label="Hi!"
      position="bottom"
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
```

```css
.tooltipContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
}
```

## Props

| Name          | PropType         | Description                                                                                                   | Default  |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------- | -------- |
| label         | PropTypes.string | Tooltip content                                                                                               | `Hi!`    |
| position      | PropTypes.string | Tooltip position `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left` and `right`. | `top`    |
| size          | PropTypes.string | Sets the font size of the text in tooltip                                                                     | `13px`   |
| duration      | PropTypes.string | Specifies the duration of the tootltip transition                                                             | `.18s`   |
| delay         | PropTypes.string | The delay on hover before showing the tooltip                                                                 | `0s`     |
| fontWeight    | PropTypes.string | The font weight of the text in tooltip                                                                        | `normal` |
| textTransform | PropTypes.string | Controls the casing of the text                                                                               | `none`   |
