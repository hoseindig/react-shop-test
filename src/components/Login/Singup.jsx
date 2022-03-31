import styles from "./login.module.scss";

const Singup = () => {
  return (
    <div className={styles["login-form"]}>
      <h4 className={styles["login-title"]}>New Customer</h4>
      <p>
        <span className="font-weight-bold">I am a new customer</span>
      </p>
      <div className="row">
        <div className="col-md-12 col-12 mb--15">
          <label for="email">Full Name</label>
          <input
            className="mb-0 form-control"
            type="text"
            id="name"
            placeholder="Enter your full name"
          />
        </div>
        <div className="col-12 mb--20">
          <label for="email">Email</label>
          <input
            className="mb-0 form-control"
            type="email"
            id="email"
            placeholder="Enter Your Email Address Here.."
          />
        </div>
        <div className="col-lg-6 mb--20">
          <label for="password">Password</label>
          <input
            className="mb-0 form-control"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="col-lg-6 mb--20">
          <label for="password">Repeat Password</label>
          <input
            className="mb-0 form-control"
            type="password"
            id="repeat-password"
            placeholder="Repeat your password"
          />
        </div>
        <div className="col-md-12">
          <a href="#" className="btn btn-outlined">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default Singup;
