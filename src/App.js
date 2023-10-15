import "./App.css";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./screens/Login";

function App() {
  return (
    <Router>
      <div className="">
        {/* <div className="bg-dark"> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
