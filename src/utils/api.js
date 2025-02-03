import axios from "axios";

const API_URL = "http://localhost:4000/seminars";

export const getSeminars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching seminars:", error);
    throw error;
  }
};

export const deleteSeminar = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting seminar:", error);
    throw error;
  }
};

export const updateSeminar = async (id, data) => {
  try {
    await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.error("Error updating seminar:", error);
    throw error;
  }
};
