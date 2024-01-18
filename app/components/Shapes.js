// components/Shapes.js

import React from 'react';

const Shapes = () => {
  return (
    <>
    <div className="hidden lg:block">
    <img src="https://bit.ly/48zVYWn" alt="White Triangle" className="absolute" style={{top: '425px', left: '100px', height: '40px'}} />
    <img src="https://bit.ly/48zVYWn" alt="White Triangle" className="absolute" style={{top: '300px', right: '200px', height: '30px'}} />
    <img src="https://bit.ly/48zVYWn" alt="White Triangle" className="absolute" style={{top: '650px', right: '80px', height: '80px'}} />
  </div>
    <div className="hidden lg:block">
              <img src="https://bit.ly/3OcleJV" alt="Orange Blur" className="absolute opacity-25" style={{top: '60px', left: '-230px'}} />
              <img src="https://bit.ly/3OcleJV" alt="Orange Blur" className="absolute opacity-25" style={{top: '160px', right: '-200px', transform: 'rotate(180deg)'}} />
              <img src="https://bit.ly/3O3hTNq" alt="Triangle" className="absolute" style={{top: '120px', left: '50px', height: '50px'}} />
              <img src="https://bit.ly/3O3hTNq" alt="Triangle" className="absolute" style={{top: '250px', right: '30px', height: '40px', transform: 'rotate(80deg)'}} />
              <img src="https://bit.ly/3tWlE0c" alt="Triangle" className="absolute" style={{top: '500px', right: '400px', height: '70px', transform: 'rotate(20deg)'}} />
     </div>
     </>
  );
};

export default Shapes;
