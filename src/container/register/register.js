import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AlertSnackBar from "../../components/Alert";
import { validateToken } from "../../utilFunctions";
import "../signIn/signIn.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    doValidation();
  }, []);

  const doValidation = async () => {
    const isTokenValid = await validateToken();
    if (isTokenValid) {
      navigate("/");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(false);
    setMessage("");
    const { token } = saveUser();
    if (token) {
      localStorage.setItem("auth", token);
      navigate("/");
      return;
    } else {
      setMessage(message);
      setShowAlert(true);
    }
  };

  const saveUser = () => {
    return { token: "Token-1" };
  };
  return (
    <div>
      <form className="signin">
        <div className="inputs">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="userName">User Name</label>
          <input
            id="userName"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input type="submit" onClick={handleSubmit} value="Sign up" />
      </form>
      <AlertSnackBar level="error" message={message} show={showAlert} />
    </div>
  );
};

export default Register;
