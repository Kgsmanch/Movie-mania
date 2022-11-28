import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Sobre from "./pages/Sobre";
import Error from "./pages/Error";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import Footer from "./components/Footer";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/*" element={<Error />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;