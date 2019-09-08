import React from 'react'
import Button from './button'
import '../stylus/components/banner.styl'

const Banner = () => (
  <section id="banner" className="banner">
    <div className="banner-container container">
      <div className="banner-content">
        <h2>Control your hue lights from your desktop</h2>
        <div className="button-group">
          <Button href="https://github.com/arturoalviar/vhue/releases/download/0.0.1/vhue-0.0.1-mac.dmg" className="primary" linksOut>Download for macOS</Button>
        </div>
      </div>
      <div className="banner-image">
        <img src="/static/images/hero-showcase.png" alt="vhue light dashboard"/>
      </div>
    </div>
  </section>
)

export default Banner
