import React from "react"
import styled from "styled-components"

import '../styles/font.scss'
import '../styles/reset.css'


const NavBarItems = () => {
    return (
        <ul>
            <li><a href="#home">Kezdőlap</a></li>
            <li><a href="#about">Rólam</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#contact">Kapcsolat</a></li>
        </ul>
    )
}

export default NavBarItems