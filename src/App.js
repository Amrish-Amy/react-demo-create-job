import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App container">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/jobs" element={<Jobs/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
