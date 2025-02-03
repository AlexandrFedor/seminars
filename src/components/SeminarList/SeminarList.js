import React from "react";
import SeminarItem from "@/components/SeminarItem/SeminarItem";
import styles from "./SeminarList.module.css";

const SeminarList = ({ seminars, onDelete, onEdit, loading, error }) => {
  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  return (
    <div className={styles.list}>
      <h1 className={styles.header}>Семинары</h1>
      {seminars.map((seminar) => (
        <SeminarItem
          key={seminar.id}
          seminar={seminar}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default SeminarList;
