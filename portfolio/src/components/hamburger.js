import { Link } from "gatsby"
import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

import '../styles/font.scss'
import '../styles/reset.css'

import style from './hamburger.module.scss'



// const SideMenu = () => {
//     return (
//         <aside 
//         className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`} 
//         onClick={() => this.close()}
//         onKeyDown={() => this.close()}>
//             <ul>
//                 <li><a href="#home">Kezdőlap</a></li>
//                 <li><a href="#about">Rólam</a></li>
//                 <li><a href="/blog">Blog</a></li>
//                 <li><a href="#contact">Kapcsolat</a></li>
//             </ul>
//         </aside>
//     )
// }

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }
    }
    /* className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`} 
          onClick={() => this.close()}
          onKeyDown={() => this.close()}*/
    render() {
        return (
            <>

                <aside
                    className={`${style.menu} ${this.state.open ? `${style.open}` : ""}`}
                >

                    <ul>
                        <li><AnchorLink href="#home">Kezdőlap</AnchorLink></li>
                        <li><AnchorLink href="#about">Rólam</AnchorLink></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><AnchorLink href="#contact">Kapcsolat</AnchorLink></li>
                    </ul>
                </aside>
            </>
        )
    }

    close() {
        this.setState({ open: false })
    }

    open() {
        this.setState({ open: true })
    }
}

export default SideMenu