import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id="about"> 

      <h5>Get To Know Me</h5>
      <h2 id='about_me_h5'>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">

            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>3+ Clients Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>

          </div>

          <p>
          Khanya Meyiswa has a profound passion of Science, Business and Technology. Engaged in the creative process he feels more alive than ever, because he is making something and not merely consuming. He believes all knowledge is connected to all other knowledge and the fun is in making those connections.

He is excessively curious and is concerned in combining the 'what' and the 'how'. He is not satisfied knowing that it works, he wants to know how it works. He enjoys startup environments that follows a 'fail fast, learn fast' ethos because they offer the greatest possibilities for learning. The goal is to explore and grow.

He is a minimalist and would often say the most with the least. A wise man once said nothing.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>

      </div>
    
    </section>
  )
}

export default about