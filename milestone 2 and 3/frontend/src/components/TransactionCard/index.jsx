import "./style.css";

const TransactionCard = ({ transaction }) => {
  const { type, amount, jar, description, childId, createdAt } = transaction;

  // childId may be populated object or just ID
  const childName =
    typeof childId === "object" ? childId.username : "Unknown";

  return (
    <div className="transaction-card">
      <div className="transaction-content">
        <h3 className="transaction-type">{type}</h3>

        <p className="child">
          Child: <strong>{childName}</strong>
        </p>

        <p className="description">{description}</p>

        <p className="jar">
          Jar: <strong>{jar}</strong>
        </p>

        <p className="amount">
          Amount: <strong>{amount} EGP</strong>
        </p>

        <p className="date">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default TransactionCard;
