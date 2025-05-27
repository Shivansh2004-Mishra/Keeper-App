import React from "react";

const Alert = ({ message }) => (
  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded border border-red-300 text-center">
    {message}
  </div>
);

export default Alert;