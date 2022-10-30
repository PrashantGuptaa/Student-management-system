import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertSnackBar from "../../components/Alert";
import "./signIn.css";
import { validateToken } from './../../utilFunctions';

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
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
    const { admin, userExists, message, token } = validateDetails();
    if (userExists) {
        localStorage.setItem("auth", token);
      if (admin) {
        navigate("/admin");
        return;
      }
      navigate("/");
      return;
    } else {
      setMessage(message);
      setShowAlert(true);
    }
  };

  const validateDetails = () => {
    if (userName === "Admin") {
      return {
        userName,
        admin: true,
        userExists: true,
        message: null,
        token: 'admin-token',
      };
    }
    return {
      userName,
      admin: false,
      userExists: true,
      message: null,
      token: 'Token-1',
    };
  };

  return (
    <div>
      <form className="signin">
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
        <input type="submit" onClick={handleSubmit} value="Sign In" />
      </form>
      <AlertSnackBar level="error" message={message} show={showAlert} />
    </div>
  );
};

export default SignIn;
