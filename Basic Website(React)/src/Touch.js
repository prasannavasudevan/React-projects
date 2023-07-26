import React from 'react';
import Card from './cardSection';

let Touch = () => (
  <section className="contact bg-success ">
  <div className="container ">
    <h2 className="text-white">
      We love new friends!
    </h2>
    <div className="row">
    <div className="col-4">
      <Card title = "LearnCodeOnline" buttonText = "Buy Now" paraText = "It is one of the best leaning platform at an affordable price." />
    </div>
    <div className="col-4">
     <Card title = "CodeAcadamey" buttonText = "Buy Now" paraText = "It is one of the best leaning platform at an affordable price."/>
    </div>
    <div className="col-4">
    <Card title = "Udemy" buttonText = "Buy Now" paraText = "It is one of the best leaning platform at an affordable price."/>
    </div>
  </div>
  </div>
</section>
)
export default Touch;
