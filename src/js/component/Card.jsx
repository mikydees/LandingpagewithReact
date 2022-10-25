import React from "react";
const Card = (props) => {
  return (
 
      <div class="card">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=640:*" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
           {props.cardText}
          </p>
          <a href="#" class="btn btn-primary">
            Find Out More!
          </a>
        </div>
      </div>



  );
};
export default Card