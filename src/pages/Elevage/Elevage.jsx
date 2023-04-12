import './Elevage.css'
import alpagaMain from "../../assets/alpaca-4366367_1280.jpg";

import React, { useState } from 'react';

const Elevage = () => {
    
    const [transform, setTransform] = useState({
        rotateX: 0,
        rotateY: 0
      });
    
      const handleMouseMove = (event) => {
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - left) / width;
        const y = (event.clientY - top) / height;
        const newX = (y - 0.5) * 20;
        const newY = (x - 0.5) * 20;
        setTransform({ rotateX: newX, rotateY: newY });
      };
    return (
        <div className='elevage'>
            <div className="container" onMouseMove={handleMouseMove}>
                <div className="image" style={{ transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)` }}>
                    <img src={alpagaMain} alt={alpagaMain} />
                </div>
            </div>

        </div>
    )
}

export default Elevage