# microtip-react

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

## Getting started

[![react-simple-tooltip](https://nodei.co/npm/microtip-react.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/microtip-react)

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

const App = () => (
    <Tooltip
        label="Hi!"
        position="top"
        size="small"
        duration="0.5s"
        delay="0.2s"
        fontWeight="bold"
        textTransform="capitalize"
        >
        <button>Selam</button>
    </Tooltip>
)
```

## Props

| Name          | PropType          | Description                                       | Default      |
| ------------- | ----------------- | ------------------------------------------------- | ------------ |
| label         | PropTypes.string  | Tooltip content                             | `Hi!`            |
| position      | PropTypes.string  | Tooltip position `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`, `left` and `right`.                          | `top`       |
| size          | PropTypes.string  | Sets the font size of the text in tooltip         | `13px`       |
| duration      | PropTypes.string  | Specifies the duration of the tootltip transition | `.18s`       |
| delay         | PropTypes.string  | The delay on hover before showing the tooltip                                   | `0s`            |
| fontWeight    | PropTypes.string  | The font weight of the text in tooltip                    | `normal`            |
| textTransform | PropTypes.string  | Controls the casing of the text                   | `none`     |
