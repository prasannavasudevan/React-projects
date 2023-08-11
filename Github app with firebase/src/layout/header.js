import React, {useState, useContext} from 'react';

import { Collapse,Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavText, NavbarText} from 'reactstrap';
import { Link } from 'react-router-dom';
import {UserContext, UsercContext} from "../context/UserContext";

const Header = () => {
    const context = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link className='text-white' to="/">
                LCO GitFire App
                </Link>
            </NavbarBrand>
            <NavbarText className='text-white'>
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" style={{marginLeft: "auto"}} navbar>
                    {
                        context.user ? (
                        <NavItem>
                            <NavLink onClick={() => {context.setUser(null)}} className='text-white'>LogOut</NavLink>
                        </NavItem>
                        ) : ( 
                        <>
                        <NavItem>
                        <NavLink tag={Link} to="/signup" className='text-white'>SignUp</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/signin" className='text-white'>SignIn</NavLink>
                    </NavItem>
                    </>
                    )
                    }
                </Nav>
            </Collapse>
        </Navbar>
        

        );
}

export default Header;