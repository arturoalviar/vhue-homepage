import React from 'react'
import PropTypes from 'prop-types'
import '../stylus/components/feature-item.styl'

const renderVisual = (props) => {
  const { image, heading, children } = props
  if (image) {
    return (
      <img src={image} alt={heading}/>
    )
  } else {
    return (
      <>
        { children }
      </>
    )
  }
}

const FeatureItem = (props) => {
  const { image, heading, text, children, isReverse} = props
  return (
    <div className={`vh-grid ${isReverse ? 'is-reverse' : ''}`}>
      <div className="vh-grid-item is-content">
        <h3 className="feature-item-heading">{heading}</h3>
        <p>{text}</p>
      </div>
      <div className="vh-grid-item is-image">
        { renderVisual(props) }
      </div>
    </div>
  )
}

FeatureItem.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string,
  isReverse: PropTypes.bool,
}

FeatureItem.defaultProps = {
  isReverse: false,
}

export default FeatureItem
