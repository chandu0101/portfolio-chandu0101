
import Link from "next/link"
import styles from "./Header.module.css"
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavbarText, NavLink, NavItem } from "reactstrap";
import { useState } from "react";

const BsLink: React.FC<{ title: string, route: string }> = ({ title, route }) => {
    return (<Link href={route} >
        <a className="nav-link">{title}</a>
    </Link>)
}

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Chandu0101 Portfolio</NavbarBrand>
                <NavbarToggler onClick={handleToggle} />
                <Collapse isOpen={toggle} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <BsLink route="/" title="Home" />
                        </NavItem>
                        <NavItem>
                            <BsLink route="/about" title="About" />
                        </NavItem>
                        <NavItem>
                            <BsLink route="/portfolios" title="Portfolio" />
                        </NavItem>
                        <NavItem>
                            <BsLink route="/blogs" title="Blog" />
                        </NavItem>
                        <NavItem>
                            <BsLink route="/cv" title="CV" />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>)
}

export default Header;
