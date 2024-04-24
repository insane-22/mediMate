import DoctorRoute from "./components/Routes/Doctor";
import PrivateRoute from "./components/Routes/Private";
import About from "./pages/About";
import Contribute from "./pages/Contribute";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DocDashboard from "./pages/doctor/DocDashboard";
import DocProfile from "./pages/doctor/DocProfile";
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
      <Route path="/contribute" element={<Contribute />} />
      <Route path="/dashboard" element={<PrivateRoute />}>
        <Route path="user" element={<Dashboard />} />
        <Route path="user/profile" element={<Profile />} />
        <Route path="user/diagnose" element={<Diagnose />} />
      </Route>
      <Route path="/dashboard" element={<DoctorRoute />}>
        <Route path="doctor" element={<DocDashboard />} />
        <Route path="doctor/profile" element={<DocProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
