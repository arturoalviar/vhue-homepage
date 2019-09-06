import React, { useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import '../stylus/components/nav.styl'

const Nav = () => {
  let timer
  const navBarRef = useRef()

  function handleScroll() {
    if (timer) {
      window.cancelAnimationFrame(timer)
    }

    timer = window.requestAnimationFrame(function () {
      const isTop = window.scrollY < 50
      isTop ?
      navBarRef.current.classList.remove('is-active') :
      navBarRef.current.classList.add('is-active')
    })
  }

  function scrollToAnchor(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    if (href.charAt(0) !== '#') return;
    const id = href.slice(1)
    const anchor = document.getElementById(id)
    const offset = anchor.getBoundingClientRect().top - 100 + window.pageYOffset

    window.scroll({
      top: offset,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    smoothscroll.polyfill()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll')
    }
  })

  return (
    <nav ref={navBarRef}>
      <div className="container">
        <div className="vh-logo">
          <a href="#banner" onClick={scrollToAnchor}>vhue</a>
        </div>
        <ul>
          <li>
            <a href="#getting-started" onClick={scrollToAnchor}>Getting Started</a>
          </li>
          <li>
            <a href="#features" onClick={scrollToAnchor}>Features</a>
          </li>
          <li>
            <a href="https://github.com/arturoalviar/vhue" target="_blank" rel="noopener">Github</a>
          </li>
        </ul>
        <button className="hamburger-menu">Menu</button>
      </div>
    </nav>
  )
}

export default Nav
