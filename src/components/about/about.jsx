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
          Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders. Thats what allows React to correctly preserve the state of Hooks between multiple useState and useEffect calls.
           If youre curious, well explain this in depth below.
          By following this rule, you ensure that all stateful logic in a component is clearly visible from its source code.
          So how does React know which state corresponds to which useState call? The answer is that React relies on the order in which Hooks are called. Our example works because the order of the Hook calls is the same on every render
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>

        </div>

      </div>
    
    </section>
  )
}

export default about