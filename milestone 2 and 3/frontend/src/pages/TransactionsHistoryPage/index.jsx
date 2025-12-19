import { useEffect, useState } from "react";
import "./style.css";

const TransactionsHistoryPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/transactions");
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <h2>Loading transactions...</h2>;
  }

  return (
    <div className="transactions-container">
      <h1>Transaction History</h1>

      {transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Child</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Jar</th>
              <th>Description</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx._id}>
                <td>{tx.childId?.username || "N/A"}</td>
                <td>{tx.type}</td>
                <td>{tx.amount} EGP</td>
                <td>{tx.jar}</td>
                <td>{tx.description}</td>
                <td>{new Date(tx.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionsHistoryPage;
