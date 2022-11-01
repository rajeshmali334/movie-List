import React from "react";

import "./styles.css";
function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.img} alt="" className="card_img" />
          <div className="card_info">
            <span className="card_category"> A Netflix Orignal Series</span>
            <h3 className={props.title}> </h3>
            <a herf="" target="_blank">
              <button> watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
