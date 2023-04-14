import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePages } from "./pages/HomePages";
import { NotFound } from "./pages/NotFound";
import { WorksPages } from "./pages/WorksPages";
import { AbautPages } from "./pages/AbautPages";
import { ContacPages } from "./pages/ContacPages";

function App() {
  return (
    <main className="">
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/works" element={<WorksPages />} />
        <Route path="/abaut" element={<AbautPages />} />
        <Route path="/contac" element={<ContacPages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
