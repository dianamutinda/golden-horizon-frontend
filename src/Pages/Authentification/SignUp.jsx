import { Link } from "react-router-dom";
import "./Authentification.css";
const SignUp = () => {
 
  return (
    <section>
      
        <div className="form1">
          <form action="">
            <div className="sign-items">
            <div className="form-comp">
              <label htmlFor="firstName">firstName</label>
              <input type="text" />
            </div>
            <div className="form-comp">
              <label htmlFor="lasttName">lastName</label>
              <input type="text" id="lastName" />
            </div>
            <div className="form-comp">
              <label htmlFor="email">email address</label>
              <input type="email" id="email" />
            </div>
            <div className="form-comp">
              <label htmlFor="phone">phone number</label>
              <input type="number" id="phone" />
            </div>
            <div className="form-comp">
              <label htmlFor="password">password</label>
              <input type="password" id="password" />
            </div>
            <div className="form-comp">
              <label htmlFor="password">confirm password</label>
              <input type="password" id="password" />
            </div>
            <div className="submit2">
                <button type="submit">sign up</button>
            </div>
            </div>
            <p className="form-text">
              already have an account? <Link to="/log in">log in here</Link>
            </p>
          </form>
        </div>
      
    </section>
  );
};
export default SignUp;
