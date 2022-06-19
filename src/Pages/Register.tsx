import { Home } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Register = () => {

  return (
    <div className='register'>
      <div className="logoContainer">
        <img src="/pictures/brownLogo.png" alt="logo" />
      </div>
      <form>
        <label>Username</label>
        <input type="text" placeholder="Username" required />
        <label>Email</label>
        <input type="email" placeholder="Email" required/>
        <label>Password</label>
        <input type="password" placeholder="password" required/>
        <button className="primary">Register</button>
        <span className="or">or</span>
        <Link to="/login" className="secondary">Login</Link>
      </form>

      <Link to="/" className="goBackBtn">
        <Home fontSize='large' />
      </Link>
    </div>
  )
}

export default Register