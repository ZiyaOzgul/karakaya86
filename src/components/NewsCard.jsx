import React from "react";

function NewsCard({ news }) {
  return (
    <div className="h-80 border border-black rounded-md overflow-hidden group relative cursor-pointer">
      <img
        src={news.imgUrl}
        alt=""
        className="object-cover w-full h-full group-hover:scale-110 group-hover:opacity-70 transition-all ease-in-out duration-500"
      />
      <div className="w-full h-full absolute top-0 bg-black opacity-0 group-hover:opacity-60 ease-in-out duration-500"></div>
      <div className="absolute bottom-1/4 lef-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all ease-in-out duration-500 overflow-y-auto">
        <h1 className="font-semibold text-xl text-white ">
          <i className="text-gray-300">{news.date} </i> {news.title}
        </h1>
        <p className="w-full mt-1 font-normal text-sm text-white ">
          {news.new}
        </p>
      </div>
    </div>
  );
}

export default NewsCard;
