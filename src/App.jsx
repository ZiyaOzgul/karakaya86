import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KurumsalPage from "./pages/KurumsalPage";
import LabPage from "./pages/LabPage";
import Referances from "./pages/Referances";

function App() {
  return (
    <div className="relative flex flex-col">
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/kurumsal" element={<KurumsalPage />} />
        <Route path="/labaratuvar" element={<LabPage />} />
        <Route path="/referanslar" element={<Referances />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
