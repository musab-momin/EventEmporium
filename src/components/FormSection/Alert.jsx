import React from "react";
import { useEffect } from "react";

const Alert = ({ type, mssg, resetAlert }) => {
  useEffect(() => {
    setTimeout(resetAlert, 3000);
  });

  return (
    <div className={`toast ${type} grid-center`}>
      <p>{mssg}</p>
    </div>
  );
};

export default Alert;
