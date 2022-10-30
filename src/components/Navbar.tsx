import {FC, useState} from "react";
import {CiMail} from "react-icons/ci";
import {NavLink} from "react-router-dom";
import "./Navbar.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';

interface NavbarProps {
  style?: React.CSSProperties;
}

const Navbar: FC<NavbarProps> = ({style}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={style}>
      <nav className="navbar navbar-expand-md text-white px-3">
        <div className="container-fluid">
          <a className="navbar-brand pink" href="#">
            Logo
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" end>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/service">
                  Services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/works">
                  Works
                </NavLink>
              </li>
              <li className="nav-item" data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>

                <CiMail/>

              </li>
            </ul>
          </div>
        </div>
        <Modal show={show} onHide={handleClose}
               size="lg" centered>
          <Modal.Header closeButton style={{background: '#bdbdbd'}}>
            <Modal.Title>Contact us</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{background: '#f2f2f2'}}>
            <p className="text-center">We are available 24/7, so don't hesitate to contact us.</p>
            <div className="text-center">
              Sometstreet Ave, 987 <br/>
              London, UK.<br/>
              +44 8948-4343<br/>
              contact@example.com<br/>
            </div>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control type="text" placeholder="Your name"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your email</Form.Label>
                <Form.Control type="email" placeholder="Your email"/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Subject"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Your message"/>
              </Form.Group>

              <div className="d-flex align-items-center justify-content-center">
                <Button variant="primary" type="submit" style={{background: '#fe7877', border: 'none'}}>
                  Send Message
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </nav>
    </div>
  );
};

export default Navbar;
