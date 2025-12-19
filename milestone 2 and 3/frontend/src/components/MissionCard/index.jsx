import "./style.css";

const MissionCard = ({ mission }) => {
  const { description, rewardXP, rewardAmount, rewardJar, childId, status } = mission;

  // Get child name - childId can be an object (populated) or string (ID)
  const childName = typeof childId === "object" ? childId.username : "Unknown";

  return (
    <div className="mission_card">
      <div className="card-content">
        <h3>Mission</h3>

        <p className="owner">
          Assigned to: <strong>{childName}</strong>
        </p>

        <p>{description}</p>

        <p className="price">XP Reward: {rewardXP}</p>
        <p className="price">Amount: {rewardAmount} EGP</p>
        <p className="price">Jar: {rewardJar}</p>
        <p className="price">Status: {status}</p>
      </div>
    </div>
  );
};

export default MissionCard;
