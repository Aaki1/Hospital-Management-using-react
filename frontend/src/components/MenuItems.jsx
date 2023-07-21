import React from "react";

function MenuItem({ image, name, Specialist }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h6> {name} </h6>
      <p> {Specialist} </p>
    </div>
  );
}

export default MenuItem;