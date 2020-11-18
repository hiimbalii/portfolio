import React from "react"

import Welcome from '../components/welcome'
import NavBar from '../components/navbar'
import SideBar from '../components/hamburger'

import '../styles/font.scss'
import '../styles/default.scss'
import '../styles/reset.css'
import AboutMe from "../components/about"



class Page extends React.Component {

    componentWillMount(){
        document.addEventListener('mousedown',this.handleClick,false)
        console.log("YEE HAW")
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown',this.handleClick,false)
    }

    handleClick=(e)=>{
            this.navbar.childMenu.close()
    }


    render() {
        return (
            <>
                <NavBar ref={navbar=>this.navbar=navbar}></NavBar>
                <Welcome></Welcome>
                <AboutMe></AboutMe>
            </>

        )
    }

}

export default Page