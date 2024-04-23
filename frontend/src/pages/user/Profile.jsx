import Layout from "../../components/Layout";
import UserSidebar from "../../components/UserSidebar";
import "../../styles/Dashboard.css";
import "../../styles/Auth.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const [auth] = useAuth();

  useEffect(() => {
    const { name, email,  phone, address } = auth.user;
    setName(name);
    setEmail(email);
    // setPassword(password)
    setPhone(phone);
    setAddress(address);
  }, [auth.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register/user",
        {
          name,
          email,
          phone,
          address,
        }
      );
      if (res && res.data.success) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: res.data.message,
          timer: 3000,
          timerProgressBar: true,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Somethimg went wrong!",
        timer: 3000,
        timerProgressBar: true,
      });
    }
  };
  return (
    <Layout>
      <div className="dashboard">
        <UserSidebar />
        <div className="dashboard-content">
          <div className="content-header">
            <h1 className="header-title"></h1>
          </div>
          <div className="row">
            <div className="image">
              <img src="/images/Control-Panel-rafiki.svg" alt="" />
            </div>
            <form onSubmit={handleSubmit}>
              <h3>Your Profile</h3>
              <input
                className="box"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                id="name"
                required
              />
              <input
                className="box"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="email"
                required
              />
              <input
                className="box"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                id="number"
                required
              />
              <input
                className="box"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
                id="address"
                required
              />
              <button className="btn">Update</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
