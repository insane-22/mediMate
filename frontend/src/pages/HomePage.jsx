import {
  FaHospital,
  FaStar,
  FaStarHalf,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const HomePage = () => {
  const navigate = useNavigate();
  const [auth] = useAuth();

  const handleClick = () => {
    navigate("/register");
  };

  const handleClick2 = () => {
    navigate("/about");
  };

  return (
    <Layout>
      <section className="home">
        <div className="image">
          <img src="/images/homepage.jpg" alt="" />
        </div>

        <div className="content">
          <h3>Stay safe, stay healthy</h3>
          <p>
            Welcome to MediMate, your trusted health companion! Whether you are
            feeling under the weather or simply seeking guidance on your health
            journey, we are here to help .We analyze your symptoms and connect
            you with the perfect doctor, ensuring personalized care tailored to
            your needs. Say goodbye to endless searching and let MediMate be
            your guiding light towards better health. Get started today and
            experience the future of healthcare, where compassion meets
            innovation.
          </p>
          {!auth.user ? (
            <button className="btn" onClick={handleClick}>
              Sign Up for BEST Experience
            </button>
          ) : (
            <>
              <button className="btn" onClick={handleClick2}>
                Explore!
              </button>
            </>
          )}
        </div>
      </section>

      <section className="icons-container">
        <div className="icon">
          <i>
            <FaUser />
          </i>
          <h3>100+</h3>
          <p>doctors at work</p>
        </div>
        <div className="icon">
          <i>
            <FaUsers />
          </i>
          <h3>1000+</h3>
          <p>happy customers</p>
        </div>
        <div className="icon">
          <i>
            <FaLocationDot />
          </i>
          <h3>40+</h3>
          <p>locations covered</p>
        </div>
        <div className="icon">
          <i>
            <FaHospital />
          </i>
          <h3>50+</h3>
          <p>hospitals connected</p>
        </div>
      </section>

      <section className="review" id="review">
        <h1 className="heading">
          {" "}
          clients <span>review</span>{" "}
        </h1>

        <div className="box-container">
          <div className="box">
            <img src="image/pic-1.jpg" alt="" />
            <h3>win coder</h3>
            <div className="stars">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
            </div>
            <p className="text">
              I cant thank MediMate enough for their exceptional service. From
              the moment I logged on, I felt cared for and supported. The
              process of finding the right doctor was seamless, and I received
              top-notch care from start to finish. I highly recommend MediMate
              to anyone in need of quality healthcare!
            </p>
          </div>

          <div className="box">
            <img src="image/pic-1.jpg" alt="" />
            <h3>win coder</h3>
            <div className="stars">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalf />
              </i>
            </div>
            <p className="text">
              MediMate has truly changed the game when it comes to accessing
              medical care. As a busy professional, I dont have time to sift
              through endless lists of doctors. With MediMate, I was able to
              input my symptoms and quickly receive recommendations for doctors
              who specialize in my condition. It is convenient, efficient, and
              most importantly, it works!
            </p>
          </div>

          <div className="box">
            <img src="image/pic-1.jpg" alt="" />
            <h3>win coder</h3>
            <div className="stars">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStarHalf />
              </i>
            </div>
            <p className="text">
              I was skeptical at first, but after using MediMate, I am a
              believer. The platform is incredibly user-friendly, and the
              recommendations were spot-on.  Thanks to MediMate, I received the care I needed,
              when I needed it. I will definitely be recommending it to my friends
              and family!
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
