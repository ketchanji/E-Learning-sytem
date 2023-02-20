import { Route, Routes, Navigate } from "react-router-dom";
import Index from "./components/Index";
import Home from "./components/Home";
import Room from "./components/Room";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/room/:RoomID" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
