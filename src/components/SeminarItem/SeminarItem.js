import { useState } from "react";
import Confirmation from "../Confirmation/Confirmation";
import Modal from "../Modal/Modal";
import styles from "./SeminarItem.module.css";

export default function SeminarItem({ seminar, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    setIsConfirmationOpen(true);
  };

  return (
    <div className={styles.item}>
      <h2>{seminar.title}</h2>
      <p>{seminar.description}</p>
      <p>Date: {seminar.date}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>

      {isModalOpen && (
        <Modal seminar={seminar} onClose={() => setIsModalOpen(false)} />
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
}
