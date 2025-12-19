import "./style.css";

const WalletCard = ({ wallet }) => {
  const { spendJar, saveJar, donateJar } = wallet;

  return (
    <div className="wallet-card">
      <div className="card-content">
        <h3>My Wallet</h3>

        <p className="wallet-item">Spend: {spendJar} EGP</p>
        <p className="wallet-item">Save: {saveJar} EGP</p>
        <p className="wallet-item">Donate: {donateJar} EGP</p>
      </div>
    </div>
  );
};

export default WalletCard;