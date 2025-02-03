"use client";

import React, { useState, useEffect } from "react";
import { getSeminars, deleteSeminar, updateSeminar } from "@/utils/api";
import SeminarList from "@/components/SeminarList/SeminarList";

const App = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSeminars();
        setSeminars(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteSeminar(id);
      setSeminars(seminars.filter((seminar) => seminar.id !== id));
    } catch (err) {
      console.error("Ошибка при удалении:", err);
    }
  };

  const handleEdit = async (updatedSeminar) => {
    try {
      await updateSeminar(updatedSeminar.id, updatedSeminar);
      setSeminars(
        seminars.map((seminar) =>
          seminar.id === updatedSeminar.id ? updatedSeminar : seminar
        )
      );
    } catch (err) {
      console.error("Ошибка при редактировании:", err);
    }
  };

  return (
    <div>
      <SeminarList
        seminars={seminars}
        onDelete={handleDelete}
        onEdit={handleEdit}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default App;
