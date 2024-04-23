import { PacmanLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Loader = ({ path = "login" }) => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
      <div className="loader">
        <PacmanLoader color="#36d7b7" size={100} />
        <h1 className="Text-center">Redirecting you in {count} second</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Loader;
