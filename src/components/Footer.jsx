import React from "react";
import {
  UilFacebookF,
  UilTwitter,
  UilInstagram,
  UilLinkedin,
} from "@iconscout/react-unicons";
function Footer() {
  return (
    <footer className="w-full h-1/5 flex flex-col items-center justify-center ">
      <div className=" w-full flex-1 bg-gradient-to-br from-red-400 to-rose-500 flex items-center justify-center p-1 relative z-10 ">
        <img
          src="http://www.karakaya86.com.tr/tr/images/uniteler-bg.jpg"
          alt=""
          className="absolute top-0 w-full h-full opacity-50 -z-10 object-cover"
        />
        <div className="w-10/12 flex items-center justify-between">
          <img
            src="http://www.karakaya86.com.tr/tr/images/footerLogo.png"
            alt=""
            className="w-1/6 h-1/4 px-2"
          />
          <div className="w-1/4 h-full flex items-center justify-center md:space-x-6">
            <a href="">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group">
                <UilFacebookF className="text-white font-bold text-xl group-hover:text-red-400 group-hover:scale-110 transition-all ease-in-out duration-500 " />
              </div>
            </a>

            <a href="">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group">
                <UilTwitter className="text-white font-bold text-xl group-hover:text-red-400 group-hover:scale-110 transition-all ease-in-out duration-500 " />
              </div>
            </a>

            <a href="">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group">
                <UilInstagram className="text-white font-bold text-xl group-hover:text-red-400 group-hover:scale-110 transition-all ease-in-out duration-500 " />
              </div>
            </a>

            <a href="">
              <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center group">
                <UilLinkedin className="text-white font-bold text-xl group-hover:text-red-400 group-hover:scale-110 transition-all ease-in-out duration-500 " />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full flex-1 bg-gradient-to-br from-gray-700 to-slate-800 flex items-center justify-center ">
        <div className="w-10/12 h-full flex items-center justify-between md:space-x-12">
          <p className="font-normal text-sm text-white">
            Copyright © 2016 Karakaya 86. Tüm Hakları Saklıdır.
          </p>
          <div className=" flex items-center space-x-6 mr-12">
            <img
              src="http://www.karakaya86.com.tr/tr/images/abto_logo2.png"
              alt=""
              className="w-48 h-20  mx-1"
            />
            <img
              src="http://www.karakaya86.com.tr/tr/images/kosgeb-logo.png"
              alt=""
              className="w-40 h-24  "
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
