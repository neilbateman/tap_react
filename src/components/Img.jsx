import React from 'react';
import pink from '../assets/pink.jpg';


function Img() {
  return (
    <div>
      <style jsx>{`
                img {
                    max-width: 100%;
                }
            `}</style>
      <img src={pink} alt=""/>
    </div>
  );
}

export default Img;