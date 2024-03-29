import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services"> 

        <h5>What I Offer</h5>
        <h2>Services</h2>

        <div className="container services_container">

          {/* <article className="service">
            <div className="service_head">
              <h3>UI/UX Design</h3>
            </div>

              <ul className='service_list'>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </li>

              </ul>

          </article>
          END OF UI/UX */}


          <article className="service">
            <div className="service_head">
              <h3>WEB DEVELOPMENT</h3>
            </div>

              <ul className='service_list'>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Website Creation</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Web hosting</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>Domain creation</p>
                </li>

              </ul>

          </article>
          {/* END OF WEB DEVELOPMENT */}


          <article className="service">
            <div className="service_head">
              <h3>GRAPHIC DESIGN</h3>
            </div>

              <ul className='service_list'>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>POSTERS</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>LOGOS</p>
                </li>

                <li>
                  <BiCheck className="service_list-icon"/>
                  <p>VIDEO ADVERTS</p>
                </li>

              </ul>

          </article>
          {/* END OF CONTENT CREATION */}

        </div>

    </section>
  )
}

export default services