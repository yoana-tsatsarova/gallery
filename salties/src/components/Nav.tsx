import {Container, Navbar} from "react-bootstrap";
const Nav = () => {
    return (
        <Navbar className="bg-body-tertiary" sticky="top">
            <Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <a href="https://github.com/">Github</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
export default Nav;
