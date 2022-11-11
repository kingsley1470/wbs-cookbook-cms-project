import React from "react";
import Reviews from "../reviews.json";
import "./footer.css"

function Footer() {
  let { reviews } = Reviews;

  return (
    <> <h2 className="reviewsH3">Reviews from around the globe...</h2>
    <div className="footerComponent">     
   
      {reviews.map((r) => (
        <div className="footerReview">
          <h3><i>"{r.quote}"</i></h3>
          <p>{r.name}</p>
          <p>{r.year}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Footer;
