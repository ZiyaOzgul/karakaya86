import { useSelector } from "react-redux";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import {
  UilAngleRight,
  UilAngleLeft,
  UilSitemap,
  UilSetting,
  UilNewspaper,
} from "@iconscout/react-unicons";
import ProcessCard from "../components/ProcessCard";
import UnitsCard from "../components/UnitsCard";
import NewsCard from "../components/NewsCard";
function HomePage() {
  const CarouselItems = useSelector((state) => state.slice.carousel);
  const [index, setIndex] = useState(0);
  const lenghtOfItems = Object.keys(CarouselItems).length;
  const Proses = useSelector((state) => state.slice.prosses);
  const Units = useSelector((state) => state.slice.units);
  const News = useSelector((state) => state.slice.news);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((previndex) =>
        previndex + 1 == lenghtOfItems ? (previndex = 0) : previndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [index]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-normal ">
      <div className="w-full h-2/3 relative">
        <Card carousel={CarouselItems[index]} />
        <div className="absolute flex items-center justify-center space-x-6 right-20 bottom-20 z-20">
          <button
            className=" w-16 h-10 bg-slate-800 text-white flex items-center justify-center rounded-lg hover:bg-red-400 ease-in-out duration-500"
            onClick={() => {
              setIndex((previndex) =>
                previndex == 0 ? (previndex = lenghtOfItems - 1) : previndex - 1
              );
              console.log(index);
            }}
          >
            <UilAngleLeft className="text-white font-medium text-lg" />
          </button>
          <button
            className=" w-16 h-10 bg-slate-800 text-white flex items-center justify-center rounded-lg hover:bg-red-400 ease-in-out duration-500"
            onClick={() => {
              setIndex((previndex) =>
                previndex + 1 == lenghtOfItems ? (previndex = 0) : previndex + 1
              );
              console.log(index);
            }}
          >
            <UilAngleRight className="text-white font-medium text-lg" />
          </button>
        </div>
      </div>
      <div className="w-10/12 h-auto flex items-center justify-center">
        <div className="flex flex-col items-start space-y-6 justify-start mt-6 ml-12">
          <h1 className="font-bold text-6xl text-red-500">Biz Kimiz</h1>
          <p className="font-medium text-base">
            Müşteri memnuniyetini ilke edinen Karakaya86 firması, çalışma
            hayatına 1986 yılında,Kartal'da çinko elektrolize kaplama
            faaliyetiyle başlamıştır. 1997 yılında ise Kartal'da, Türkiye'deki
            ilk fason çalışan kataforez hattını kurarak hizmet vermeye devam
            etmiştir.
          </p>
          <p className="font-medium text-base">
            Ekonomik çözümlerle, müşterilerine kaliteli hizmet sunmak için; 2003
            yılında yatırım çalışmalarını başlatmıştır. 2004 yılında, Gebze'deki
            11000 m² ‘lik alanı üzerine fabrikasını kurarak, 1550 m² ' lik
            toplam kapalı alanda faaliyetini sürdürmüştür.
          </p>
          <p className="font-medium text-base">
            2005 yılında, Elektrostatik Toz Boya hattını bünyesine dahil
            etmiştir. 2008 yılında kapasitesini artırmak için, 2.kataforez
            hattını ve bununla birlikte yeni Elektrostatik Toz Boya hattını
            kurarak, toplam kapalı alanını 3100 m2'ye yükseltmiştir.Müşteri
            isteği doğrultusunda, Karakaya86 firmasında kumlama, vibrasyon,
            kromat kaplama ve yaş boya hizmeti de verilmektedir.
          </p>
        </div>
      </div>
      <div className="w-full h-96 bg-car bg-no-repeat mt-4 flex items-center justify-center">
        <div className="w-11/12 flex items-center justify-center space-x-4">
          {Proses.map((item, index) => (
            <ProcessCard process={item} key={index} id={index} />
          ))}
          <div className="w-60 h-80 bg-red-500 flex items-center justify-center group relative cursor-pointer">
            <UilSitemap className="w-full h-1/5 text-lg font-semibold text-red-300 group-hover:scale-110 group-hover:text-red-200 transition-all ease-in-out duration-500" />
            <div className="absolute  bottom-13 right-0 group-hover:translate-x-2 ease-in-out duration-500">
              <h1 className="font-semibold text-3xl text-white -rotate-90 ">
                Prossesler
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-car bg-no-repeat mt-4 flex items-center justify-center ">
        <div className="w-11/12 flex items-center justify-center space-x-4 ">
          <div className="w-60 h-80 bg-red-500 flex items-center justify-center group relative cursor-pointer">
            <UilSetting className="w-full h-1/5 text-lg font-semibold text-red-300 group-hover:scale-110 group-hover:text-red-200 transition-all ease-in-out duration-500" />
            <div className="absolute  bottom-13 right-0 group-hover:translate-x-2 ease-in-out duration-500">
              <h1 className="font-semibold text-3xl text-white -rotate-90 ">
                Ünteler
              </h1>
            </div>
          </div>
          {Units.map((item, index) => (
            <UnitsCard process={item} key={index} id={index} />
          ))}
        </div>
      </div>

      <div className="w-full h-auto flex flex-col items-center justify-start my-6">
        <div className="w-11/12 flex items-start justify-start flex-col">
          <div className="w-full h-40 bg-red-500 flex items-center justify-end group relative cursor-pointer">
            <UilNewspaper className="w-full h-full text-3xl font-semibold text-red-300 group-hover:scale-110 group-hover:text-red-200 transition-all ease-in-out duration-500" />
            <div className="absolute  bottom-13 right-1/3 group-hover:translate-x-2 ease-in-out duration-500">
              <h1 className="font-semibold text-3xl text-white -rotate-90 ">
                Haberler
              </h1>
            </div>
          </div>
          <div className="w-full h-auto grid grid-cols-5 gap-3 mt-2">
            {News.map((item, id) => (
              <NewsCard news={item} key={id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
