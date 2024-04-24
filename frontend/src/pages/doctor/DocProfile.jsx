import { useEffect, useState } from "react";
import "../../styles/Auth.css";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Layout from "../../components/Layout";
import DocSidebar from "../../components/DocSidebar";
import { useAuth } from "../../context/auth";

const DocProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hospitalAddress, setAddress] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [availabilities, setAvailabilities] = useState([
    { startTime: "", endTime: "" },
  ]);
  const [auth] = useAuth();

  useEffect(() => {
    const {
      name,
      email,
      phone,
      hospitalAddress,
      specialisation,
      // availabilities,
    } = auth.user;
    setName(name);
    setEmail(email);
    // setPassword(password)
    setPhone(phone);
    setAddress(hospitalAddress);
    setSpecialisation(specialisation);
    // setAvailabilities(availabilities)
  }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register/doctor",
        {
          name,
          email,
          phone,
          hospitalAddress,
          specialisation,
          availability: availabilities,
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

  const handleAvailabilityChange = (index, key, value) => {
    const updatedAvailabilities = [...availabilities];
    updatedAvailabilities[index][key] = value;
    setAvailabilities(updatedAvailabilities);
  };

  const handleAddAvailability = () => {
    setAvailabilities([...availabilities, { startTime: "", endTime: "" }]);
  };

  const handleRemoveAvailability = (index) => {
    const updatedAvailabilities = [...availabilities];
    updatedAvailabilities.splice(index, 1);
    setAvailabilities(updatedAvailabilities);
  };
  return (
    <Layout>
      <div className="dashboard">
        <DocSidebar />
        <div className="dashboard-content ">
          {/* <div className="content-header">
            <h1 className="header-title">Dashboard</h1>
          </div> */}
          <div className="dash ar">
            <div className="row">
              <div className="image">
                <img src="/images/Doctor.svg" alt="" />
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
                  value={hospitalAddress}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  id="hospitalAddress"
                  required
                />
                <input
                  className="box"
                  type="text"
                  value={specialisation}
                  onChange={(e) => setSpecialisation(e.target.value)}
                  placeholder="Specialisation"
                  required
                />
                <h2>Availability:</h2>
                {availabilities.map((availability, index) => (
                  <div key={index}>
                    <input
                      className="box-time"
                      type="time"
                      value={availability.startTime}
                      onChange={(e) =>
                        handleAvailabilityChange(
                          index,
                          "startTime",
                          e.target.value
                        )
                      }
                      placeholder="Start Time"
                      required
                    />
                    <input
                      className="box-time "
                      type="time"
                      value={availability.endTime}
                      onChange={(e) =>
                        handleAvailabilityChange(
                          index,
                          "endTime",
                          e.target.value
                        )
                      }
                      placeholder="End Time"
                      required
                    />
                    <button
                      type="button"
                      className="bt"
                      onClick={handleAddAvailability}
                    >
                      <FaPlus />
                    </button>
                    <button
                      type="button"
                      className="bt"
                      onClick={() => handleRemoveAvailability(index)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                ))}
                <button className="btn">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocProfile;
