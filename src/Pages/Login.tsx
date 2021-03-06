import { Home,  } from "@mui/icons-material"
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <div className='login'>
      <div className="logoContainer">
        <img src="/pictures/brownLogo.png" alt="logo" />
      </div>
      <form>
        <label>Email</label>
        <input type="email" placeholder="Email" required/>
        <label>Password</label>
        <input type="password" placeholder="password" required/>
        <button className="primary">Log in</button>
        <span className="restoreAcc">Forgotten account ?</span>
        <span className="or">or</span>
        <Link to="/register" className="secondary">Create New Account</Link>
      </form>

      <Link to="/"  className="goBackBtn">
        <Home fontSize='large' />
      </Link>
    </div>
  )
}

export default Login