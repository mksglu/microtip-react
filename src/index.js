import React, { Component, Flagment } from "react"
import PropTypes from "prop-types"
import "./microtip.css"

class Tooltip extends Component {
  render() {
    const {
      label,
      position,
      size,
      role,
      duration,
      delay,
      fontSize,
      fontWeight,
      textTransform,
      children
    } = this.props

    const Styles = {
      delay: { "--microtip-transition-delay": `${delay}` },
      duration: { "--microtip-transition-duration": `${duration}` },
      fontSize: { "--microtip-font-size": `${fontSize}` },
      fontWeight: { "--microtip-font-weight": `${fontWeight}` },
      textTransform: { "--microtip-text-transform": `${textTransform}` }
    }
    return (
      <data
        aria-label={label}
        data-microtip-position={position}
        data-microtip-size={size}
        role={role}
        style={{
          ...Styles.delay,
          ...Styles.duration,
          ...Styles.fontSize,
          ...Styles.duration,
          ...Styles.fontWeight,
          ...Styles.textTransform
        }}
      >
        {children}
      </data>
    )
  }
  static propTypes = {
    label: PropTypes.string,
    position: PropTypes.string,
    size: PropTypes.string,
    role: PropTypes.string,
    duration: PropTypes.string,
    delay: PropTypes.string,
    fontSize: PropTypes.string,
    fontWeight: PropTypes.string,
    textTransform: PropTypes.string,
    label: PropTypes.string
  }
  static defaultProps = {
    label: "Simple Tooltip for React!",
    position: "top",
    size: "100% auto !important",
    role: "tooltip",
    duration: ".18s",
    delay: "0s",
    fontSize: "13px",
    fontWeight: "normal",
    textTransform: "none"
  }
}
export default Tooltip