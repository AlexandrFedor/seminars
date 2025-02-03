import axios from "axios";

const API_URL = "http://localhost:4000/seminars";

// Получить все семинары
export const getSeminars = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Ошибка при загрузке семинаров:", error);
    throw error;
  }
};

// Удалить семинар по ID
export const deleteSeminar = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Ошибка при удалении семинара:", error);
    throw error;
  }
};

// Обновить семинар
export const updateSeminar = async (id, data) => {
  try {
    await axios.put(`${API_URL}/${id}`, data);
  } catch (error) {
    console.error("Ошибка при обновлении семинара:", error);
    throw error;
  }
};

// Добавить новый семинар
export const addSeminar = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data;
  } catch (error) {
    console.error("Ошибка при добавлении семинара:", error);
    throw error;
  }
};
