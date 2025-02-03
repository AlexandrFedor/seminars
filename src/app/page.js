import { useEffect, useState } from "react";
import { getSeminars, deleteSeminar } from "../utils/api";
import SeminarList from "../components/SeminarList/SeminarList";

export default function Home() {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSeminars();
        setSeminars(data);
      } catch (error) {
        setError(error.message);
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
    } catch (error) {
      console.error("Error deleting seminar:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Seminars</h1>
      <SeminarList seminars={seminars} onDelete={handleDelete} />
    </div>
  );
}
