import React from "react"
import {Link} from 'gatsby';
import Footer from '../components/footer';

const IndexPage = () => {
    return (
        <div>
            <h1>tbalazs.dev</h1>
            <h2>Tóth Balázs vagyok, webfejlesztő Győrből.</h2>
            <p>Egyéni megoldásokra van szüksége? <Link to="/contact">Lépjen velem kapcsolatba!</Link></p>
        </div>
    )
}


export default IndexPage
