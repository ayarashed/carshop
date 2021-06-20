import { Link} from 'react-router-dom';
import { Navbar , Nav} from 'react-bootstrap';
import {BsListUl} from 'react-icons/bs';
import logo from '../../car-images/svg/navbar.svg';
import   "./navbar.scss";
const NavBar = () => {
    return ( 
        <Navbar expand="lg">
        <Navbar.Brand>
        <Link to="/">
            <div className="logo">
                <img alt="" src={logo}/>
            </div>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll">
          <span style={{color: "red", fontSize: "25px"}}><BsListUl/></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0" navbarScroll>
            <Link className="nav-link"  to="/" >الرئيسية</Link>
            <Link className="nav-link" to="/rentcar">الايجار</Link>
            <Link className="nav-link"  to="/sellcar">الشراء</Link>
            <Link className="nav-link" to="/about">عن الشركة</Link>
            <Link className="nav-link"  to="/contactus" >اتصل بنا</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}
 
export default NavBar;