const Login = () => {
  return (
    <div className='login'>
      <div className="logoContainer">
        <img src="/pictures/brownLogo.png" alt="logo" />
      </div>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="Full name" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Password</label>
        <input type="password" placeholder="password" />
        <button className="primary">Log in</button>
        <span className="restoreAcc">Forgotten account ?</span>
        <span className="or">or</span>
        <button className="secondary">Create New Account</button>
      </form>
    </div>
  )
}

export default Login