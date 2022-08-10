import React, {Component, useState} from "react";
import {NavbarBrand, Navbar, Nav, NavbarToggler, Collapse, NavItem, Container} from 'reactstrap' 
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar expand="md" className="navbar">
                    <div className="container">
                    <NavbarBrand className="mr-auto" href="/">
                        {/*<img src="assets/images/logo.png" height="80"></img>*/}
                        <span className="nav-name">PAOB LOGO</span>
                    </NavbarBrand>
                    <Nav navbar className="inner-nav">
                        <NavItem className="nav-link-text">
                            <NavLink className="nav-link" style={{color:"#ffffff"}} to="/">Inicio</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-text">
                            <NavLink className="nav-link" style={{color:"#ffffff"}} to="/">Areas de Trabajo</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-text">
                            <NavLink className="nav-link" style={{color:"#ffffff"}} to="/">Acerca de</NavLink>
                        </NavItem>
                        <NavItem className="nav-link-text">
                            <NavLink className="nav-link" style={{color:"#ffffff"}} to="/">Contacto</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar className="left-nav">
                        <NavItem className="nav-link-text">
                            <NavLink className="nav-link" to="/">
                                <span class="dot"><i className="fa fa-phone"></i></span>
                                310 824 0515
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;