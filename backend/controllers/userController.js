import axios from "axios"

export const getSymptomsController = async (req, res) => {
  try {
    const getdata = axios
      .get("http://127.0.0.1:5000/symptoms")
      .then((response) => {
        const symptoms = response.data;
        res.json(symptoms);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  } catch (error) {}
};
