import React, { useState } from 'react'
import './pricing.css';
import { pricing } from '../../data';
import Card from '../card/Card';
const Pricing = () => {
    const [isAnual,setIsAnual] = useState(false);
  return (
    <div className="pricing-container">
        <div className="wrapper">
            <h1>Our Pricing</h1>
            <div className="toggle">
                <p>Annually</p>
                <div className="toggle-btn" onClick={() => setIsAnual(!isAnual)}>
                    <div className={isAnual ? "toggle-ball active" :"toggle-ball"}></div>
                </div>
                <p>Monthly</p>
            </div>
            <section className="pricing-grid">
                {pricing.map((price,index) => (
                    <Card price={price} key={index} isAnual={isAnual}/>
                ))}
            </section>
        </div>
    </div>
  )
}

export default Pricing;