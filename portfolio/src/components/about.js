import React from "react"

import '../styles/font.scss'
import '../styles/reset.css'

import style from './about.module.scss'



const AboutMe = () => {
    return (
        <section className={style.aboutme}>
            <h1 className={style.title} id="about" data-lax-preset="zoomIn">
                Üdv!
  </h1>
            <p className={style.intro} data-lax-preset="zoomIn">
                Tóth Balázs vagyok, és weboldalakat, webes applikációkat tervezek és
                készítek. <br></br>
                Sajnos a sablonokat utálom, ezért kénytelen vagyok minden weboldalba időt, energiát és kreativítást rakni.<br />
                Erre van szüksége?  Dolgozzunk együtt!
  </p>
            <h2 className={style.subtitle}  data-lax-preset="zoomIn">Rólam</h2>
            <p data-lax-preset="zoomIn" className={style.intro}  >
                <img src="/headshot.jpg" alt="Kép rólam" /> Győrben születtem, és
    azóta is itt élek, bár szerencsére sokat volt alkalmam utazni. <br />Már
    fiatal koromban is nagyon érdekelt az informatika, amit 4 éve tanulok a
    győri Jedlik Ányos Szakgimázimban, a szaktárgyakból kiemelkedő
    eredménnyel. 2019 nyarán az Audi Hungáriánál volt alkalmam tanulni és
    dolgozn. <br />Már korán rájöttem, hogy az interneten van a jövő, ezért
    főleg a webes applikációkra fókuszáltam, de az asztali alkalmazásokkal
    sem gyűlik meg a bajom.
  </p>

 </section>
    )
}


/*
            <h2 class="subtitle lax" data-lax-preset="zoomIn">Eddigi munkáim</h2>
            <article class="lax" data-lax-preset="zoomIn">
                <img
                    class="main-img"
                    src="https://via.placeholder.com/480x270"
                    alt="Placeholder img"
                />
                <section>
                    <h3>Olympos 1 & 2.0</h3>
                    <p>
                        Az Olympos egy sportrendezvény mendzser program, amely segíti a
                        regisztrációtól/beléptetéstől, a büfén át, egészen az
                        eredményhirdetésig a szervezők munkáját. Erről többet a
        <a href="#">blogomban</a> olvashat, vagy ha szeretné ön is használni
        lépjünk <a href="#contact">kapcsolatba</a>
                    </p>
                </section>
                <div class="icons">
                    <img
                        src="https://d33wubrfki0l68.cloudfront.net/49c2be6f2607b5c12dd27f8ecc8521723447975d/f05c5/logo-small.cbbeba89.svg"
                        alt=""
                    />
                    <img
                        src="https://www.postgresql.org/media/img/about/press/elephant.png"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1200px-Socket-io.svg.png"
                        alt=""
                    />
                </div>
                <div class="description">
                    <p>2020</p>
                    <p>Jedlik DÖK</p>
                </div>
            </article>

            <article class="lax" data-lax-preset="zoomIn">
                <img
                    class="main-img"
                    src="https://via.placeholder.com/480x270"
                    alt="Placeholder img"
                />
                <section>
                    <h3>shop.jedlik</h3>
                    <p>
                        Belső használatra készült webshopom, ami képes az iskolánk egyéni
                        igényeit kielégiíteni.
      </p>
                </section>
                <div class="icons">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                        alt=""
                    />
                    <img
                        src="https://www.gstatic.com/devrel-devsite/prod/v35095b53655653106712feb44f96c6929ce012ae38486ad7db1de265cbd9b7ec/firebase/images/touchicon-180.png"
                        alt=""
                    />
                    <img src="https://bulma.io/images/bulma-logo.png" alt="" />
                </div>
                <div class="description">
                    <p>2020</p>
                    <p>Jedlik DÖK</p>
                </div>
            </article>



            <article class="lax" data-lax-preset="zoomIn">
                <img
                    class="main-img"
                    src=" https://via.placeholder.com/480x270"
                    alt="Placeholder img"
                />
                <section>
                    <h3>RIF Media Group Weboldal (folyamatban)</h3>
                    <p>
                        Egy feltörekvő csapat számára bemutatkozó weboldal, illetve
                        automatizált szerverbérlés
      </p>
                </section>
                <div class="icons">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                </div>
                <div class="description">
                    <p>2020</p>
                    <p>Jedlik DÖK</p>
                </div>
            </article>

            <article class="lax" data-lax-preset="zoomIn">
                <img
                    class="main-img"
                    src=" https://via.placeholder.com/480x270"
                    alt="Placeholder img"
                />
                <section>
                    <h3>HalfMole Design Portfolio oldal (folyamatban)</h3>
                    <p>
                        Design konzultáció, szakmai tanácsadás, és a weboldal fejlesztése
      </p>
                </section>
                <div class="icons">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg?download"
                        alt=""
                    />
                </div>
                <div class="description">
                    <p>2020</p>
                    <p>Jedlik DÖK</p>
                </div>
            </article>
       */


export default AboutMe