import React from 'react'
import Button from './button'
import '../stylus/components/contribute.styl'

const Contribute = () => (
  <section className="section-contribute">
    <div className="container">
      <h2 className="section-heading">Made with Electron and Vue</h2>
      <div className="button-group">
        <Button
          href="https://github.com/arturoalviar/vhue"
          className="primary"
          linksOut
        >
          See source code
        </Button>
        <Button
          href="https://github.com/arturoalviar/vhue/releases"
          className="secondary"
          linksOut
        >
          See all releases
        </Button>
      </div>
    </div>
  </section>
)

export default Contribute
