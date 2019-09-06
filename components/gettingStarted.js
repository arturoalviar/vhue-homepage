import React from 'react'
import Icon from './icon'
import '../stylus/components/gettingStarted.styl'

const GettingStarted = () => (
  <section id="getting-started" className="vhue-section">
    <div className="container">
      <h2 className="section-heading">Getting Started</h2>
      <div className="grid-getting-started">
        <div className="card-getting-started">
          <div className="icon-getting-started">
            <Icon name="discover"/>
          </div>
          <h3 className="heading-getting-started">
            Discover
          </h3>
          <div className="getting-started-content">
            <p>Vhue will search your local network and automatically find your hue bridge.</p>
          </div>
        </div>
        <div className="card-getting-started">
          <div className="icon-getting-started">
            <Icon name="bridge"/>
          </div>
          <h3 className="heading-getting-started">
            Connect
          </h3>
          <div className="getting-started-content">
            <p>Press the sync button on your Philips Hue bridge and then connect via vhue.</p>
          </div>
        </div>
        <div className="card-getting-started">
          <div className="icon-getting-started">
            <Icon name="launch"/>
          </div>
          <h3 className="heading-getting-started">
            Light up
          </h3>
          <div className="getting-started-content">
            <p>Vhue will let you know you are connected and ready start controlling all avaiable lights.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default GettingStarted
