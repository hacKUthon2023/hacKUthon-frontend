import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubWayNum from "./pages/SubWayNum";
import SubWayRoute from "./pages/SubWayRoute";
import SubWayStatus from "./pages/SubWayStatus";
import Error from "./pages/Error";
import SeatGet from "./pages/SeatGet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subway-route" element={<SubWayRoute />} />
        <Route path="/subway-num" element={<SubWayNum />} />
        <Route path="/subway-status" element={<SubWayStatus />} />
        <Route path="/seat-get" element={<SeatGet />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
