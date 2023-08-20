import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubWayNum from "./pages/SubWayNum";
import SubWayRoute from "./pages/SubWayRoute";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subway-route" element={<SubWayRoute />} />
        <Route path="/subway-num" element={<SubWayNum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
