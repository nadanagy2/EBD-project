import "./RegisterCard.css";

const RegisterCard = ({ user }) => {
  const { username, password, age, Parent_phone } = user;

  return (
    <div className="register-card">
      <h3>{username}</h3>
      <p>Password: {password}</p>
      <p>Age: {age}</p>
      <p>Parent Phone: {Parent_phone}</p>
    </div>
  );
};

export default RegisterCard;
