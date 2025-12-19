import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const MissionsHistoryPage = () => {
  const [missions, setMissions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/missions");
        const data = await res.json();
        setMissions(data);
      } catch (error) {
        console.error("Error fetching missions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  if (loading) {
    return <h2>Loading missions...</h2>;
  }

  return (
    <div className="missions-container">
      <h1>Missions</h1>

      {missions.length === 0 ? (
        <p>No missions found.</p>
      ) : (
        <table className="missions-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Reward XP</th>
              <th>Reward Amount (EGP)</th>
              <th>Reward Jar</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission._id}>
                <td>{mission.description}</td>
                <td>{mission.rewardXP}</td>
                <td>{mission.rewardAmount} EGP</td>
                <td>{mission.rewardJar}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MissionsPage;