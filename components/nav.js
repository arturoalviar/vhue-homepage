import React, { useState, useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import debounce from 'lodash.debounce'
import '../stylus/components/nav.styl'

const Nav = () => {
  let timer
  const [isNavActive, setIsNavActive] = useState(false)
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false)
  const [navHeight, setNavHeight] = useState(0)
  const navbar = useRef()

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

  function handleResize() {
    setIsMobileMenuActive(false)
    setNavHeight(navbar.current.offsetHeight)
  }

  function scrollToAnchor(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    if (href.charAt(0) !== '#') return;
    const id = href.slice(1)
    const anchor = document.getElementById(id)
    const offset = anchor.getBoundingClientRect().top - navHeight + window.pageYOffset

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
    setNavHeight(navbar.current.offsetHeight)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', debounce(handleResize, 150))

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // toggle nav active class when mobile menu is toggled
  useEffect(() => {
    if (isMobileMenuActive && !isNavActive) {
      setIsNavActive(true)
    }
    else if (!isMobileMenuActive && isTop()) {
      setIsNavActive(false)
    }
  }, [isMobileMenuActive])

  const renderNavItems = () => (
    <>
      <li>
        <a href="#getting-started" onClick={scrollToAnchor}>Getting Started</a>
      </li>
      <li>
        <a href="#features" onClick={scrollToAnchor}>Features</a>
      </li>
      <li>
        <a href="https://github.com/arturoalviar/vhue" target="_blank" rel="noopener">Github</a>
      </li>
    </>
  )

  return (
    <nav ref={navbar} id="vh-nav" className={isNavActive ? 'is-active' : ''}>
      <div className="container">
        <div className="vh-logo">
          <a href="#banner" onClick={scrollToAnchor}>vhue</a>
        </div>
        <ul className="vh-nav-menu">
          {renderNavItems()}
        </ul>
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          { isMobileMenuActive ? 'close' : 'menu'}
        </button>
      </div>
      <ul className={`vh-nav-mobile ${isMobileMenuActive ? 'is-active' : ''}`}>
        {renderNavItems()}
      </ul>
    </nav>
  )
}

export default Nav
