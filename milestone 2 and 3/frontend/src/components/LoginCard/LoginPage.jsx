import "./LoginCard.css";

const LoginCard = ({ user }) => {
  const { username, password } = user;

  return (
    <div className="login-card">
      <h3>{username}</h3>
      <p>Password: {password}</p>
    </div>
  );
};

export default LoginCard;
