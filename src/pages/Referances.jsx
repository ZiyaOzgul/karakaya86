import { UilBag } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import ReferanceCard from "../components/ReferanceCard";

function Referances() {
  const Referans = useSelector((state) => state.slice.referances);
  return (
    <div className="w-full h-auto flex flex-col items-center justify-normal">
      <div className="w-full relative ">
        <img
          src="http://www.karakaya86.com.tr/Dosya/SayfaResim/158a46241f2943.jpg"
          alt=""
          className="w-full object-fill "
        />
        <div className="absolute bottom-1/4 right-16">
          <div className="relative flex items-center justify-center">
            <h1 className="absolute bottom-0 right-1/2 font-bold text-9xl text-red-400 opacity-60">
              Referanslarımız
            </h1>
            <h1 className="font-bold text-6xl text-white z-10 pr-10">
              Referanslarımız
            </h1>
          </div>
        </div>
      </div>

      <div className="w-11/12 my-6">
        <div className="w-full h-20 bg-red-500 flex items-center justify-start rounded-lg group">
          <h1 className="mx-12 text-2xl font-bold text-white group-hover:scale-110 group-hover:translate-x-2 transition-all ease-in-out duration-500">
            Referanslarımız
          </h1>
          <UilBag className="w-16 h-full font-semibold text-red-300 group-hover:scale-110 group-hover:text-red-200 transition-all ease-in-out duration-500" />
        </div>
        <div className="w-11/12 mt-6 grid grid-cols-5 gap-3 mx-auto">
          {Referans.map((item, id) => (
            <ReferanceCard referans={item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Referances;
