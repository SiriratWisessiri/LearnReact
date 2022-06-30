import Navbar from 'react-bootstrap/Navbar';
import logo from'./image/logo.png';

function NavBar() {
  return (
    <div className='nav-bar'>
    <Navbar>
        <img src={logo} className="logo"/> 
        <h4>MemeGenerator</h4>
        <Navbar.Collapse className="justify-content-end">
           <p>React Course - Project 3</p> 
        </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavBar;