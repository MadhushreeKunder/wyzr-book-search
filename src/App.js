import { Route, Routes } from "react-router";
import "./App.css";
import { Home, Search } from "./Pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
