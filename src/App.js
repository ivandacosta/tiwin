import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

//pages
import { Home } from "./Pages/Home/Home";
import { Restaurante } from "./Pages/Restaurante/Restaurante";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurantes" element={<Restaurante />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
