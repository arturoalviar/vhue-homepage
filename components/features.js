import React from 'react'
import FeatureItem from './featuresItem'
import Video from './video'

const Features = ({ children }) => (
  <section id="features" className="vhue-section">
    <div className="container">
      <h2 className="section-heading">Features</h2>
      <FeatureItem
        heading="Control your lights and rooms"
        text="With vhue, you can add, delete, and edit all your lights/rooms synced to your hue bridge. All changes done outside of vhue are automatically refreshed in real time."
        image="static/images/feature-lights.png"
        isReverse
      >
      </FeatureItem>
      <FeatureItem
        heading="Two beautiful themes"
        text="Switch between two themes — light and dark — easily from the settings page and maintain the beauitful design."
        image="static/images/feature-themes.png"
      >
      </FeatureItem>
      <FeatureItem
        heading="Toggle your lights"
        text="Vhue has a global keyboard shortcut that can toggle user-selected lights. This means you can use keyboard macros to turn on your lights."
        isReverse
      >
        <Video
          title="Novelkeys big switch with hue"
          poster="https://thumbs.gfycat.com/ConsciousUniqueAegeancat-poster.jpg"
          sources={{
            webm: "https://giant.gfycat.com/ConsciousUniqueAegeancat.webm",
            mp4: "https://giant.gfycat.com/ConsciousUniqueAegeancat.mp4",
            mobile: "https://thumbs.gfycat.com/ConsciousUniqueAegeancat-mobile.mp4"
          }}
        />
      </FeatureItem>
    </div>
    {children}
  </section>
)

export default Features
