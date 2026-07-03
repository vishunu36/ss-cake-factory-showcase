import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CakeDetails from "./pages/CakeDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;