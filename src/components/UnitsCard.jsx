import React from "react";
import { Link } from "react-router-dom";
import { UilArrowRight } from "@iconscout/react-unicons";

function UnitsCard({ process, id }) {
  return (
    <Link to={`/process/${id}`}>
      <div className="w-60 h-80  flex flex-col items-start justify-start relative group hover:scale-110 ease-in-out duration-500">
        <img
          src={process.imgLink}
          alt=""
          className="w-full h-2/3 object-cover "
        />
        <h1 className="font-medium text-lg text-white z-20 mx-2">
          {process.title} Unit
        </h1>
        <p className="font-normal text-base text-red-400 mx-2 group-hover:text-red-500 ease-in-out duration-500 flex items-center">
          İncele{" "}
          <UilArrowRight className="font-medium text-base text-red-400 group-hover:translate-x-4 group-hover:text-red-500 transition-all ease-in-out duration-500" />{" "}
        </p>
        <div className="w-full h-full absolute top-0 left-0 bg-slate-600/40 z-10"></div>
      </div>
    </Link>
  );
}

export default UnitsCard;
