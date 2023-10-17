import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="fixed top-0  w-full h-auto flex items-center justify-center bg-slate-100/40 z-50">
      <div className="w-10/12 flex items-center justify-between ">
        <img src={Logo} alt="Logo" className="w-1/6 h-24" />
        <div className="flex-1 h-24 bg-gradient-to-br from-gray-600 to-slate-400 bg-opacity-70 ">
          <div className="w-full h-full flex items-center space-x-6 ml-6">
            <Link to={"/"}>
              <p className="font-medium text-lg text-white hover:text-red-400 ease-in-out duration-500">
                Anasayfa
              </p>
            </Link>
            <Link to={"/kurumsal"}>
              <p className="font-medium text-lg text-white hover:text-red-400 ease-in-out duration-500">
                Kurumsal
              </p>
            </Link>

            <Link to={"/labaratuvar"}>
              <p className="font-medium text-lg text-white hover:text-red-400 ease-in-out duration-500">
                Labaratuvar
              </p>
            </Link>
            <Link to={"/referanslar"}>
              <p className="font-medium text-lg text-white hover:text-red-400 ease-in-out duration-500">
                Referanslar
              </p>
            </Link>

            {/* <Link to={"/üreticiFirmaİşbirliği"}>
              <p className="font-medium text-lg text-white hover:text-red-400 ease-in-out duration-500">
                Üretici Firma İşbirliği
              </p>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
