import axios from "axios";

export const getSymptomsController = async (req, res) => {
  try {
    const getdata = axios
      .get("http://127.0.0.1:5000/symptoms")
      .then((response) => {
        const symptoms = response.data.symptoms;
        res.status(200).send({
          success: true,
          message: "All Categories List",
          symptoms,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

export const postSyptomsController = async (req, res) => {
  try {
    const data = req.body;
    const postdata = axios
      .post("http://127.0.0.1:5000/diagnose", data)
      .then((response) => {
        const symptoms = response.data;
        res.status(200).send({
          success: true,
          message: "All Categories List",
          symptoms,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};

export const diagnoseController = async (req, res) => {
  try {
    const data = req.body;
    const postdata = axios
      .post("http://127.0.0.1:5000/final", data)
      .then((response) => {
        const disease = response.data;
        res.status(200).send({
          success: true,
          message: "All Categories List",
          disease,
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error",
      error,
    });
  }
};
