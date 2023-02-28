import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import Room from "./components/Room";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />room?roomid=
        <Route path="/room/:RoomID" element={<Room />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
