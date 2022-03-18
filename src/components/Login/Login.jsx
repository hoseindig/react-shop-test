import styles from "./login.module.scss";
import { useContext } from "react";
import UserContext from "../../store/userContext";
const Login = (props) => {
  const userCntx = useContext(UserContext);
  console.log(userCntx);
 
  return (
    <div className={styles["login-form"]}>
      <h4 className={styles["login-title"]}>Returning Customer</h4>
      <p>
        <span className="font-weight-bold">I am a returning customer</span>
      </p>
      <div className="row">
        <div className="col-md-12 col-12 mb--15">
          <label for="email">Enter your email address here...</label>
          <input
            className="mb-0 form-control"
            type="email"
            id="email1"
            placeholder="Enter you email address here..."
          />
        </div>
        <div className="col-12 mb--20">
          <label for="password">Password</label>
          <input
            className="mb-0 form-control"
            type="password"
            id="login-password"
            placeholder="Enter your password"
          />
        </div>
        <div className="col-md-12">
          <button className="btn btn-outlined" onClick={userCntx.userLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
