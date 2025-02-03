import SeminarItem from "../SeminarItem/SeminarItem";
import styles from "./SeminarList.module.css";

export default function SeminarList({ seminars, onDelete }) {
  return (
    <div className={styles.list}>
      {seminars.map((seminar) => (
        <SeminarItem key={seminar.id} seminar={seminar} onDelete={onDelete} />
      ))}
    </div>
  );
}
