import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Row,
  Col
} from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import "../styles.css";
import Iframe from 'react-iframe'

const Footer = () => {
  return (
    <footer>
      {" "}
      <Container className="" fluid>
        <Row className="mx-auto">
          <Col md="4" className="text-center">
          <Iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d528.3669862958213!2d-81.33776922901438!3d37.30546758121114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884e381ddb8462e7%3A0xc17011e8836a752!2s505%20Moore%20St%2C%20Pocahontas%2C%20VA%2024635!5e0!3m2!1sen!2sus!4v1656653837798!5m2!1sen!2sus"
        width=""
        height=""
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        />
            <p>505 Moore Street, Pocahontas, VA 24605, USA</p>
            <p>&copy; Tokyo Sweets Bakery</p>
          </Col>
          <Col md="4" className="text-center d-flex-column">
            <h5> Main Menu </h5>
            <ul className="list-unstyled d-flex flex-md-column text-center justify-content-md-center justify-content-evenly">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </Col>
          <Col md="4" className="text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="http://instagram.com/"
            >
              <i className="fa fa-instagram" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-facebook"
              href="http://www.facebook.com/"
            >
              <i className="fa fa-facebook" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-twitter"
              href="http://twitter.com/"
            >
              <i className="fa fa-twitter" />
            </a>{" "}
            <a
              className="btn btn-social-icon btn-google"
              href="http://youtube.com/"
            >
              <i className="fa fa-youtube-play" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
