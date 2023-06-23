import { Container, Navbar } from "react-bootstrap";
import Logo from "../assets/JavaPuffs-transparant.png";
import GithubLogo from "../assets/github-mark.svg";

const Nav = () => {
  return (
    <Navbar className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: "auto", maxWidth: "50%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="https://github.com/saltams/summer23-jfs-lab-reactGallery">
              <img
                src={GithubLogo}
                alt="GitHub"
                style={{ height: "30px", width: "30px" }}
              />
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Nav;
