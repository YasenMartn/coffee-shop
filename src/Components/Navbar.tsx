import { useState } from "react";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [menu, setmenu] = useState(false)
  const [input, setinput] = useState(false)


  return (
    <div className='container'>
      <div className={"mobileMenu " + (menu ? "active" : "")}>
        <Link to="/" onClick={() => {setmenu(false)}}>Home</Link>
        <a href="">Cart</a>
        <a href="">Saved</a>
        <a href="">About</a>
        <a href="">Account</a>

      </div>

      <div className="left">
        <div className="menuContainer" onClick={() => setmenu(!menu)} >
          <div className={"line " + (menu ? "active" : "")}></div>
        </div>
      </div>

      <div className="center">
        <Link to="/" className="imgContainer">
          <img src="/pictures/brownLogo.png" alt="logo" />
        </Link>
      </div>

      <div className="right">
        <input type="search" className={(input ? "active" : "null")} />
        <Search fontSize="large" className="icon" onClick={() => {setinput(!input)}} />
      </div>

    </div>
  )
}

export default Navbar