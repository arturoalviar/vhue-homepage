import React, { useState, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import '../stylus/components/nav.styl'

const Nav = () => {
  let timer
  const [isNavActive, setIsNavActive] = useState(false)
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)

  function isTop() {
    return window.scrollY < 50
  }

  function handleScroll() {
    if (timer) {
      window.cancelAnimationFrame(timer)
    }

    timer = window.requestAnimationFrame(function () {
      // add background when scrolled and keep background if mobile menu is open
      isTop() && !isMobileMenuActive ? setIsNavActive(false) : setIsNavActive(true)
    })
  }

  function scrollToAnchor(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    if (href.charAt(0) !== '#') return;
    const id = href.slice(1)
    const anchor = document.getElementById(id)
    const offset = anchor.getBoundingClientRect().top - 100 + window.pageYOffset

    if (isMobileMenuActive) {
      setIsMobileMenuActive(false)
    }

    window.scroll({
      top: offset,
      behavior: 'smooth'
    })
  }

  function toggleMobileMenu(event) {
    setIsMobileMenuActive(!isMobileMenuActive)
  }

  useEffect(() => {
    // init smoothscroll
    smoothscroll.polyfill()
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  // toggle nav active class when mobile menu is toggled
  useEffect(() => {
    if (isMobileMenuActive && !isNavActive) {
      setIsNavActive(true)
    }
    else if (!isMobileMenuActive && isTop()) {
      setIsNavActive(false)
    }
  }, [isMobileMenuActive])

  return (
    <nav id="vh-nav" className={isNavActive ? 'is-active' : ''}>
      <div className="container">
        <div className="vh-logo">
          <a href="#banner" onClick={scrollToAnchor}>vhue</a>
        </div>
        <ul className="vh-nav-menu">
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
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          { isMobileMenuActive ? 'close' : 'menu'}
        </button>
      </div>
      <ul className={`vh-nav-mobile ${isMobileMenuActive ? 'is-active' : ''}`}>
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
    </nav>
  )
}

export default Nav
