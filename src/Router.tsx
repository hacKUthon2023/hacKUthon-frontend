import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubWayNum from "./pages/SubWayNum";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subway-num" element={<SubWayNum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
