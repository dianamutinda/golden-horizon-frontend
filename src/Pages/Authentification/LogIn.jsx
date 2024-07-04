
import {Link} from 'react-router-dom'
const LogIn = () => {
  return(
    <section >
        <div className="form2">
          <form action="">
            <div className="sign-items">
            
            <div className="form-comp">
              <label htmlFor="email">email address</label>
              <input type="email" id="email" />
            </div>
            <div className="form-comp">
              <label htmlFor="password">password</label>
              <input type="password" id="password" />
            </div>
        
            <div className="submit2">
                <button type="submit">sign up</button>
            </div>
            </div>
            <p className="form-text">
              don't have an account? <Link to="/sign up">sign up here</Link>
            </p>
          </form>
        </div>
    </section>
      
  )
};
export default LogIn;
