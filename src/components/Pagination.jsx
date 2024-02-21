import React from "react";

function Pagination({pageNo, handlePrev, handleNext}) {
  return (
    <div className="bg-black-400 p-4 mt-8 flex justify-center">
      <div onClick={handlePrev} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
