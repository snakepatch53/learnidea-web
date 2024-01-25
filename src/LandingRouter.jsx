import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./landing.views/Home";
import Cursos from "./landing.views/Cursos";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";

export default function LandingRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
