function Card({ carousel }) {
  return (
    <div className="w-full h-full relative group">
      <img
        src={carousel.imgLink}
        alt=""
        className="w-full h-full opacity-75 object-fill "
      />
      <div className="absolute top-0 right-0 w-full h-full bg-slate-800/30"></div>
      <h1 className="font-bold text-6xl text-white absolute right-20 bottom-1/3 z-10 group-hover:-translate-x-4 ease-in-out duration-500">
        {carousel.title}
      </h1>
    </div>
  );
}

export default Card;
