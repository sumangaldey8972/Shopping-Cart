import React from 'react'
import {Navbar, Container, FormControl, Nav, Dropdown, Badge} from "react-bootstrap"
function Header() {
  return (
    <div>
        <Navbar bg='dark' variant="dark" style={{height: 50}} >
            <Container>
                <Navbar.Brand>
                    <a>Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text>
                    <FormControl style={{widht:1000}} placeholder="Search a Product" className="m-auto" />
                </Navbar.Text>
                <Nav>
                    <Dropdown alignRight>
                        <Dropdown.Toggle>
                            <Badge>
                                {10}
                            </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{midWidth : 370}}>
                            <span style={{padding:10}} > Cart is Empty! </span>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header