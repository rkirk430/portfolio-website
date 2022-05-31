import React from 'react'
import './services.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Services = () => {
  return (
    <section id="services">
      <h5> What I Offer </h5>
      <h2> Services </h2>
      <div className="container services__container">
        {/* Start of Card 1 */}
        <article className="service">
          <div className="service__head">
            <h2> UI/UX Design </h2> 
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
          </ul>
        </article>
        {/* END OF Card 1 */}

        {/* Beg of Card 2 */}
        <article className="service">
          <div className="service__head">
            <h2> Web Development </h2> 
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
          </ul>
        </article>
        {/* End of Card 2 */}
        {/* Beg of Card 3 */}
        <article className="service">
          <div className="service__head">
            <h2> Content Creation </h2> 
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
            <li>
              <AiOutlineCheck className='serice__list-icon' />
              <p> Lorem, Script What I've done </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services