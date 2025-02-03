import React, { useState } from "react";
import SeminarItem from "@/components/SeminarItem/SeminarItem";
import styles from "./SeminarList.module.css";
import AddSeminarModal from "../AddSeminarModal/AddSeminarModal";

const SeminarList = ({ seminars, onDelete, onEdit, onAdd, loading, error }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddSeminar = (newSeminar) => {
    onAdd(newSeminar);
    setIsAddModalOpen(false);
  };

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  return (
    <div className={styles.list}>
      <h1 className={styles.header}>Семинары</h1>
      <button
        className={styles.addButton}
        onClick={() => setIsAddModalOpen(true)}
      >
        Добавить семинар
      </button>
      {seminars.map((seminar) => (
        <SeminarItem
          key={seminar.id}
          seminar={seminar}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}

      {isAddModalOpen && (
        <AddSeminarModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddSeminar}
        />
      )}
    </div>
  );
};

export default SeminarList;
