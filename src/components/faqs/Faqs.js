import React from 'react'
import './faqs.css';
import { faqs } from '../../data';
import Accordion from '../accordion/Accordion';
const Faqs = () => {
  return (
      <div className="wrapper">
          <div className="faqs-contianer">
              <h2>Frequently Asked Questions.</h2>
            {faqs.map((faq,index) => (
                <Accordion faq={faq} key={index} index={index}/>
            ))}
          </div>
      </div>
  )
}

export default Faqs;