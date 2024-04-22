import { FaChevronRight, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedin, FaMapMarked, FaPhoneAlt, FaPinterest, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Quick Links</h3>
          <Link to=""><i><FaChevronRight /></i>Home</Link>
          <Link to=""><i><FaChevronRight /></i>Services</Link>
          <Link to=""><i><FaChevronRight /></i>About</Link>
          <Link to=""><i><FaChevronRight /></i>Doctors</Link>
          <Link to=""><i><FaChevronRight /></i>Book</Link>
          <Link to=""><i><FaChevronRight /></i>Review</Link>
          <Link to=""><i><FaChevronRight /></i>Blogs</Link>
        </div>
        
        <div className="box">
          <h3>Our Services</h3>
          <Link to=""><i><FaChevronRight /></i>Home</Link>
          <Link to=""><i><FaChevronRight /></i>Services</Link>
          <Link to=""><i><FaChevronRight /></i>About</Link>
          <Link to=""><i><FaChevronRight /></i>Doctors</Link>
          <Link to=""><i><FaChevronRight /></i>Blogs</Link>
        </div>

        <div className="box">
          <h3>Contact Info</h3>
          <Link to=""><i><FaPhoneAlt /></i>7676767676</Link>
          <Link to=""><i><FaPhoneAlt /></i>1232323232</Link>
          <Link to=""><i><FaEnvelope /></i>a@gmail.com</Link>
          <Link to=""><i><FaEnvelope /></i>b@gmail.com</Link>
          <Link to=""><i><FaMapMarked /></i>Roorkee, India</Link>
        </div>

        <div className="box">
          <h3>Follow us</h3>
          <Link to=""><i><FaFacebookF /></i>Facebook</Link>
          <Link to=""><i><FaTwitter /></i>Twitter</Link>
          <Link to=""><i><FaInstagram /></i>Instagram</Link>
          <Link to=""><i><FaLinkedin /></i>Linkedin</Link>
          <Link to=""><i><FaPinterest /></i>Pinterest</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
