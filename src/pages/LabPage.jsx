import React from "react";
import { UilFlask } from "@iconscout/react-unicons";
function LabPage() {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-normal">
      <div className="w-full relative ">
        <img
          src="http://www.karakaya86.com.tr/Dosya/Manset/158a1d14a7774f.jpg"
          alt=""
          className="w-full object-fill "
        />
        <div className="absolute bottom-1/4 right-16">
          <div className="relative flex items-center justify-center">
            <h1 className="absolute bottom-0 right-1/2 font-bold text-9xl text-red-400 opacity-60">
              Laboratuvar
            </h1>
            <h1 className="font-bold text-6xl text-white z-10 pr-10">
              Laboratuvar
            </h1>
          </div>
        </div>
      </div>
      <div className="w-11/12 my-6">
        <div className="w-full h-20 bg-red-500 flex items-center justify-start rounded-lg group">
          <h1 className="mx-12 text-2xl font-bold text-white group-hover:scale-110 group-hover:translate-x-2 transition-all ease-in-out duration-500">
            Laboratuvar
          </h1>
          <UilFlask className="w-16 h-full font-semibold text-red-300 group-hover:scale-110 group-hover:text-red-200 transition-all ease-in-out duration-500" />
        </div>
        <div className="w-10/12 flex flex-col mt-6 mx-2">
          <p className="font-normal text-sm">
            Karakaya86 müşterilerine sunduğu Laboratuvar kapsamı , kaliteli ürün
            ve hizmet anlayışıın en önemli parçalarından birisidir. Detaylı
            proses analizleri ile ürün kalitesini her zaman güvence altında
            tutmayı hedeflemektedir.
          </p>
          <p className="mt-4 font-normal text-sm">
            Laboratuvarda bulunan pilot kataforez hattı ile hatalı üründe
            alınacak aksiyon çalışmaları,kimyasal süreçlerin yönetimi ve yeni
            kimyasal ürünlerin denemesi ile parçaya etkisi araştırılmaktadır.
          </p>
          <p className="mt-4 font-normal text-sm">
            CCT (ÇEVRİMSEL KOROZYON) için birçok Ulusal, Uluslararası ve
            Kurumsal test metotları bulunmaktadır.
          </p>
          <p className="mt-4 font-normal text-sm">
            Renault Cycle Test D17 2028/C (ECC1)
          </p>
          <p className="mt-1 font-normal text-sm">
            Mercedes Cycle Test DIN EN ISO 11997-1B
          </p>
          <p className="mt-1 font-normal text-sm">VDA 621-415</p>
          <p className="mt-1 font-normal text-sm">
            Mercedes Humidity Test DIN EN ISO 6270-2 Part AHT
          </p>
          <p className="mt-1 font-normal text-sm">
            Ford Cyclic Test CETP 00.00-L-467
          </p>
          <p className="mt-1 font-normal text-sm">
            VW Volkswagen PV 1210 USE CAP
          </p>
          <p className="mt-1 font-normal text-sm">Volvo STD 423-0014</p>
          <p className="mt-1 font-normal text-sm">Honda CCT Basic Mode</p>
          <p className="mt-1 font-normal text-sm">Toyota TSH1555 G</p>
          <p className="mt-4 font-normal text-sm">
            Tuz Püskürtme testleri için birçok ulusal, uluslararası ve Kurumsal
            test metotları bulunmaktadır.
          </p>
          <p className="mt-4 font-normal text-sm">
            Toyota Salt Spray TSH 1552 G
          </p>
          <p className="mt-1 font-normal text-sm">
            Renault Salt Spray D17 1058/...5
          </p>
          <p className="mt-1 font-normal text-sm">Ford ASTM B117 Salt Spray</p>
          <p className="mt-1 font-normal text-sm">
            Mercedes DIN EN ISO 9227 SS Salt Spray
          </p>
          <p className="mt-1 font-normal text-sm">
            Heldox Salt Spray EN ISO 7253
          </p>
          <p className="mt-1 font-normal text-sm">
            Fiat Salt Spray 50180 A1 and A2
          </p>
          <p className="mt-1 font-normal text-sm">
            Volkswagen Salt Spray DIN 50021
          </p>
          <p className="mt-1 font-normal text-sm">
            Hyundai Salt Spray JIS Z 2371
          </p>
          <p className="mt-1 font-normal text-sm">Wabco Salt Spray JED 240-5</p>
          <p className="mt-1 font-normal text-sm">
            Hyundai Salt Spray M5600-35-JIS D 0202
          </p>
          <p className="mt-1 font-normal text-sm">
            VOLVO SALT SPRAY STD 5711-102 NSS
          </p>
        </div>
      </div>
    </div>
  );
}

export default LabPage;
