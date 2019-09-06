import React from 'react'
import '../stylus/components/button.styl'

const Button = ({ href, children, className, linksOut }) => (
  <a
    className={`button ${ className }`}
    href={ href }
    target={ linksOut ? '_blank' : '' }
    rel={ linksOut ? 'noopener' : '' }
  >
    {children}
  </a>
)

export default Button
