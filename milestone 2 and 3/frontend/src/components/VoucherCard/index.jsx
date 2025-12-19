import "./index.css";

const VoucherCard = ({ voucher, onBuy }) => {
  return (
    <div className="listing-card">
      <div className="listing-card-content">
        <h3 className="listing-title">{voucher.title}</h3>

        <p className="listing-description">
          Merchant: {voucher.merchant}
        </p>

        <p className="listing-price">
          {voucher.price} EGP
        </p>

        <button className="listing-btn" onClick={() => onBuy(voucher)}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default VoucherCard;
