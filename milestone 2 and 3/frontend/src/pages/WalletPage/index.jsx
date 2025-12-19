import { useState, useEffect } from "react";
import "./style.css";

const WalletsPage = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/wallets")
      .then((res) => res.json())
      .then((data) => setWallets(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="wallets-container">
      <h1>Wallets</h1>
      {wallets.length === 0 ? (
        <p>No wallets available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Child Name</th>
              <th>Spend Jar</th>
              <th>Save Jar</th>
              <th>Donate Jar</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {wallets.map((wallet) => (
              <tr key={wallet._id}>
                <td>{wallet.childId?.username || "Unknown"}</td>
                <td>{wallet.spendJar}</td>
                <td>{wallet.saveJar}</td>
                <td>{wallet.donateJar}</td>
                <td>{wallet.IsActive ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WalletPage;
