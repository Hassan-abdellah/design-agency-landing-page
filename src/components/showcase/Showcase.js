import React from 'react'
import './showcase.css';
import { images } from '../../images';
const Showcase = ({ setIsModal, setModalImage }) => {
  return (
    <div className="wrapper">
      <section className="grid">
        {
          images.map((image) => (
            <img src={image.url} key={image.id} onClick={() => {
              setIsModal(true);
              setModalImage(image.url);
            }} alt="" />
          ))
        }
      </section>
    </div>
  )
}

export default Showcase;