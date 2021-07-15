import React, { useState, useEffect } from 'react'
import {  FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './ModelStyles.css';

const Model = ({selectedImg, setSelectedImg }) => {

    const [imgNr, setImgNr] = useState(0);
    

    
    useEffect (() => {
        console.log('bytt')
    }, [imgNr])

    const handleArrow = (dir) => {
        if(dir === 'right'){

            if(imgNr < selectedImg.length - 1){
                setImgNr(imgNr + 1);

            }else{
                // Set active image to first image
                console.log('End of array' + imgNr)
                setImgNr(0);
            }
        }else {
            if(imgNr > 0){
                setImgNr(imgNr - 1);
            }else{
                // Set active image to last image
                console.log('Start of array' + imgNr)
                setImgNr(selectedImg.length - 1);
                
            }
        }  

    }
    const handleClick = (e) => {
        if(e.target.classList.contains('img-container')){
            setSelectedImg(null);
        } 
    }

    
    return (
         <div className="backdrop" onClick={handleClick}>
            <div className="img-container">   
            <div className="img-number">{imgNr + 1} / {selectedImg.length}  </div>
            
            { selectedImg.length > 1 && <div className="arrow-icon" onClick={() => handleArrow('left')}>
                <FaArrowLeft size="3rem" />
            </div> }

            <img className="model-img" src={selectedImg[imgNr]} alt="Förstorad bild" />

            { selectedImg.length > 1 && <div className="arrow-icon" onClick={() => handleArrow('right')}>
                <FaArrowRight size="3rem" /> 
            </div> }
            
            </div>
            
        </div>
    )
}

export default Model
