import React from "react";

const Title = ({ name, title }) => {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text__title">
        <h1 className="text-capitalize font-weight-bold">
          {name} <strong className="text__blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
};

export default Title;
