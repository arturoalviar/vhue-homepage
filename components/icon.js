import React from 'react'
import PropTypes from 'prop-types'

const Icon = ({ name }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
    dataicon={name}
    role="img"
    className={`icon-svg icon-svg-${name}`}
  >
    <use xlinkHref={`static/images/icons.svg#${name}`} />
  </svg>
)

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon
