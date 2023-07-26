import React from 'react';
import Btn from './btn';

let Feature = () => ( 
   <div className="bg-success text-center">
    <p className="display-4 text-white p-4">Discover the amazing new app</p>
    <p className="text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, rem?
    </p>
    <div className="row  p-4">
      <div className="col-6 text-right">
        <Btn btnText = "Play Store"/>
      </div>
      <Btn btnText = "Apple Store"/>
      <div className="col-6 text-center"></div>
    </div>
  </div>

);

export default Feature;