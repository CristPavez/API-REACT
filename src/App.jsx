import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import { ContactPage, Notfound } from "./pages/";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
