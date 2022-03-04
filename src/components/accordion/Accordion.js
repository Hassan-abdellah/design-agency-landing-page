import React, { useState } from 'react'
import './accordion.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
const Accordion = ({ faq, index }) => {
    const [selected, setSelected] = useState(null);
    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    }
    return (
        <div className="accordion">
            <div className="accordion-head" onClick={() => toggle(index)}>
                <span>{faq.question}</span>
                {selected === index ? (
                    <AiOutlineMinus />
                ) : (
                    <AiOutlinePlus />
                )}
            </div>
            <div className={selected === index ? "accordion-body active" :"accordion-body"}>
                <p>{faq.answer}</p>
            </div>
        </div>
    )
}

export default Accordion