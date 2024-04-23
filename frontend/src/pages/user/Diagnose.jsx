import { useState } from "react";
import Layout from "../../components/Layout";
import UserSidebar from "../../components/UserSidebar";
import "../../styles/Dashboard.css";
import axios from "axios";
import { IoMdCloseCircle } from "react-icons/io";

const Diagnose = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [input, setInput] = useState("");
  const [problem, setProblem] = useState([]);
  const [disease, setDisease] = useState("");

  const getSymptoms = async (value) => {
    try {
      axios
        .get("http://localhost:3000/api/v1/user/get-symptoms")
        .then((response) => {
          const results = response.data.symptoms.filter((symptom) => {
            return value && symptom && symptom.toLowerCase().includes(value);
          });
          setSymptoms(results);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    getSymptoms(value);
  };

  const handleClick = (result) => {
    setProblem([...problem, result]);
    setInput("");
    setSymptoms([]);
  };

  const removeProblem = (index) => {
    const updatedProblem = [...problem];
    updatedProblem.splice(index, 1);
    setProblem(updatedProblem);
  };

  const diagnose = async () => {
    try {
      const send = await axios.post(
        "http://localhost:3000/api/v1/user/post-symptoms",
        problem
      );
      if (send?.data.success) {
        const finalArr = send?.data.symptoms;
        const res = await axios.post(
          "http://localhost:3000/api/v1/user/diagnose",
          finalArr
        );
        if (res?.data.success) {
          setDisease(res?.data.disease);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="dashboard">
        <UserSidebar />
        <div className="dashboard-content">
          <div className="content-header">
            <h1 className="header-title">Diagnose</h1>
          </div>
          <p>We are here to help!</p>
          <div className="dash">
            {/* <div className="image">
              <img src="/images/diagnose.svg" alt="" />
            </div> */}
            <div className="input-wrapper">
              <input
                className="box"
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
              />
            </div>
            <div className="results-list">
              {symptoms &&
                symptoms.map((result, id) => {
                  return (
                    <div
                      className="search-result"
                      key={id}
                      onClick={() => handleClick(result)}
                    >
                      {result}
                    </div>
                  );
                })}
            </div>
            {problem.length !== 0 ? (
              <div className="selected-symptoms">
                {problem && <h2>Selected Symptoms:-</h2>}
                <div className="jacket">
                  {problem &&
                    problem.map((p, id) => {
                      return (
                        <div className="one-symptom" key={id}>
                          {p}
                          <IoMdCloseCircle onClick={() => removeProblem(id)} />
                        </div>
                      );
                    })}
                </div>
                <button
                  className="btn"
                  style={{ fontSize: "1rem" }}
                  onClick={diagnose}
                >
                  Diagnose
                </button>
                {disease ? <h5>{disease}</h5> : <></>}
              </div>
            ) : (
              <><p>Symptom not in the list? Worry not!</p></>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Diagnose;
