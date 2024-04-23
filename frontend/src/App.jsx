import Loader from "./components/Loader";
import PrivateRoute from "./components/Routes/Private";
import About from "./pages/About";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/user/Dashboard";
import Diagnose from "./pages/user/Diagnose";
import Profile from "./pages/user/Profile";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/log" element={<Loader />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/profile" element={<Profile/>} />
        <Route path="user/diagnose" element={<Diagnose/>} />
      </Route>
    </Routes>
  );
}

export default App;
