import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Fav from "./pages/Fav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/fav" element={<Fav/>} />
    </Routes>
   
  </BrowserRouter>
    </div>
  );
}

export default App;
