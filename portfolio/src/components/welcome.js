import React from "react"
import styled from "styled-components"

import '../styles/font.scss'
import '../styles/reset.css'

import style from './welcome.module.scss'



const Welcome = () => {
    return (
        <section className={style.container} id="home">
            <span></span>
            <div id="logo">
                <h1 className={style.title}  data-lax-scale="0 1, (document.getElementById('home').scrollHeight*0.5) 0">tbalazs.dev
        </h1>
                <h2 data-lax-opacity="0 1, (document.getElementById('home').scrollHeight*0.45) 0|speed=2"
                   className={style.subtitle} >webfejlesztés - design - devops</h2>
            </div>
            <div className={style.skip} 
                data-lax-opacity="0 1, (document.getElementById('home').scrollHeight*0.45) 0|speed=2">
                <a href="#about">
                    <p>Eddigi projectjeim</p>
                    <span>V</span>
                </a>
            </div>
        </section>)
}

export default Welcome