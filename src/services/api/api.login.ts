import axios from "axios";
const ipMaquina = "192.168.0.10";
const localhostMaquina = "localhost";

const API_URL = `http://${ipMaquina}:3000/app/login`;

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al loguear usuario:", error);
    throw error;
  }
};
