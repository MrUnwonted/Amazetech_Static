import React from "react";
import Gallery from "../../assest/Gallery.png";

export default function GalTop() {
  return (
    <div className="md:h-[400px] h-[300px] py-20 md:py-10 px-10 md:px-20 flex">
      <div className="h-full w-[50%] flex items-center justify-center">
        <div className="md:text-4xl w-[50%]  flex justify-center items-center text-black font-bold">
          GALLERY
        </div>
      </div>
      <div className=" md:h-full sm:w-full md:w-[700px] flex items-center justify-center">
        <img
          src={Gallery}
          alt="Gallery"
          className="h-full w-[70%] object-contain"
          loading="lazy"
        ></img>
      </div>
    </div>
  );
}
