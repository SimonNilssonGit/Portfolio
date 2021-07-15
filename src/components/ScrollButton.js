import {React, useState} from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai';

import 'index.css';

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className="scroll-btn">
     <AiOutlineArrowUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </div>
  );
}
  
export default ScrollButton;