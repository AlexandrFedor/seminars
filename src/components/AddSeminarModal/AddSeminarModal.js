import React, { useState } from "react";
import styles from "@/components/Modal/Modal.module.css"; // Используем те же стили, что и для Modal

const AddSeminarModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      title,
      description,
      date,
      time,
      photo,
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Добавить новый семинар</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Название:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Описание:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Дата:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Время:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Фото (URL):</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
            />
          </div>
          <div className={styles.buttons}>
            <button type="button" onClick={onClose}>
              Отмена
            </button>
            <button type="submit">Добавить</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeminarModal;
