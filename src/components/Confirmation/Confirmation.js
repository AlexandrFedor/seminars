import React from "react";
import styles from "./Confirmation.module.css"; // Подключаем стили

const Confirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className={styles.confirmationOverlay}>
      <div className={styles.confirmation}>
        <h2>Вы уверены?</h2>
        <p>Вы действительно хотите удалить этот семинар?</p>
        <div className={styles.buttons}>
          <button onClick={onCancel}>Отмена</button>
          <button onClick={onConfirm}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
