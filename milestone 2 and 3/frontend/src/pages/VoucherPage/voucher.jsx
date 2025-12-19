import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const VoucherListPage = () => {
  const [vouchers, setVouchers] = useState([]);
  const navigate = useNavigate();

  // Fetch vouchers from backend
  useEffect(() => {
    const fetchVouchers = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/vouchers");
        if (!response.ok) {
          throw new Error("Failed to fetch vouchers");
        }
        const data = await response.json();
        setVouchers(data);
      } catch (error) {
        console.error(error);
        alert("Error fetching vouchers.");
      }
    };

    fetchVouchers();
  }, []);

  // Handle Buy Now click
  const handleBuyNow = (voucher) => {
    // Replace with real purchase logic or navigation
    alert(`You clicked Buy Now for: ${voucher.title}`);
    // Example: navigate(`/purchase/${voucher._id}`);
  };

  return (
    <div className="voucher-list-container">
      <h1>Available Vouchers</h1>
      <div className="voucher-grid">
        {vouchers.map((voucher) => (
          <div key={voucher._id} className="voucher-card">
            <h2>{voucher.title}</h2>
            <p>
              <strong>Price:</strong> {voucher.price} EGP
            </p>
            <p>
              <strong>Merchant:</strong> {voucher.merchant}
            </p>
            <button onClick={() => handleBuyNow(voucher)}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherPage;
