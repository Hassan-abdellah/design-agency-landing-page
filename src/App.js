import {useState} from 'react';
import Showcase from './components/showcase/Showcase';
import Modal from './components/modal/Modal';
import {AnimatePresence} from 'framer-motion';
import Pricing from './components/pricing/Pricing';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Team from './components/team/Team';
import Faqs from './components/faqs/Faqs';
function App() {
  const [isModal,setIsModal] = useState(false);
  const [modalImage,setModalImage] = useState('');
  return (
    <div className="app">
      <Navbar/>
      <Hero/>
      <Showcase setIsModal={setIsModal} setModalImage={setModalImage}/>
      <Pricing/>
      <Team/>
      <Faqs/>
      <Footer/>
      <AnimatePresence>
      {isModal && (
        <Modal setIsModal={setIsModal} isModal={isModal} modalImage={modalImage} setModalImage={setModalImage}/>
      )}
      </AnimatePresence>
    </div>
  );
}

export default App;
