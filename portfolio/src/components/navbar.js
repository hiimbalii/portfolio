import React from "react"
import styled from "styled-components"
import AnchorLink from 'react-anchor-link-smooth-scroll'

import '../styles/font.scss'
import '../styles/reset.css'

import style from './navbar.module.scss'


import SideMenu from "./hamburger"
import { Link } from "gatsby"

class NavBar extends React.Component {

  render() {
    return (
      <>

        <nav className={style.navbar}>
          <h1
            data-lax-opacity="0 0, (document.getElementById('home').scrollHeight*0.37-1) 0,(document.getElementById('home').scrollHeight*0.37) 1"
            id="navbar-logo"
            className={style.title}
          >
            tbalazs.dev
        </h1>
          <img
            role="button"
            className={style.icon}
            onClick={() => this.toggleMenu()}
            src="/hamburger.png"
            alt="Hamburger menu icon"
          />
          <ul className={style.items}>
            <li><AnchorLink href='#home'>Kezdőlap</AnchorLink></li>
            <li><AnchorLink href="#about">Rólam</AnchorLink></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><AnchorLink href="#contact">Kapcsolat</AnchorLink></li>
          </ul>
        </nav>
        <SideMenu ref={el => (this.childMenu = el)} />
      </>

    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
  close(){
    console.log("!!")
  }
}

export default NavBar