import React from "react";

function Attendence(props) {
  return (
    <div>
      <h1>
        {props.hours} {props.section} {props.day}
      </h1>
    </div>
  );
}

export default Attendence;
