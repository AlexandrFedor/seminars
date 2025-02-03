import React, { useState } from "react";
import Confirmation from "@/components/Confirmation/Confirmation";
import Modal from "@/components/Modal/Modal";
import styles from "./SeminarItem.module.css";

const SeminarItem = ({ seminar, onDelete, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    setIsConfirmationOpen(true);
  };

  const handleSave = (updatedSeminar) => {
    onEdit(updatedSeminar);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.item}>
      <img src={seminar.photo} alt={seminar.title} className={styles.photo} />
      <h2>{seminar.title}</h2>
      <p>{seminar.description}</p>
      <p>Дата: {seminar.date}</p>
      <p>Время: {seminar.time}</p>
      <div className={styles.buttons}>
        <button onClick={handleEdit}>Редактировать</button>
        <button onClick={handleDelete}>Удалить</button>
      </div>

      {isModalOpen && (
        <Modal
          seminar={seminar}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSave}
        />
      )}

      {isConfirmationOpen && (
        <Confirmation
          onConfirm={() => {
            onDelete(seminar.id);
            setIsConfirmationOpen(false);
          }}
          onCancel={() => setIsConfirmationOpen(false)}
        />
      )}
    </div>
  );
};

export default SeminarItem;
