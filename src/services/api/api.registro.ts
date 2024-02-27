// api.js
import axios from "axios";
const ipMaquina = "192.168.0.100";
const localhostMaquina = "localhost";

const API_URL = `http://${ipMaquina}:3000/app/registro`;

export const registerUser = async (userData: any) => {
  try {
    const response = await axios.post(API_URL, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    throw error;
  }
};

export const obtenerUsuarios = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la lista de usuarios:", error);
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`${API_URL}/${userId}`);

    if (response.status === 204) {
      console.log("Usuario eliminado con éxito.");
    } else {
      throw new Error("Error en la solicitud de eliminación");
    }
  } catch (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
};

export const updateUser = async (userData) => {
  try {
    const response = await axios.put(`${API_URL}/${userData._id}`, userData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      console.log("Usuario actualizado con éxito.");
    } else {
      throw new Error("Error en la solicitud de actualización");
    }
  } catch (error) {
    console.error("Error al actualizar usuario:", error);
    throw error;
  }
};
