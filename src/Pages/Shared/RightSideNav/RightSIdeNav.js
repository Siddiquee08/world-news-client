import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaSnapchat,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSIdeNav = () => {
  const { providerlogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handeGoogle = () => {
    providerlogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handeGoogle}
          variant="outline-primary"
          className="mb-3 px-5 py-2"
        >
          <FaGoogle></FaGoogle> Google Log in
        </Button>
        <Button className="mb-3 px-5 py-2" variant="outline-dark">
          <FaGithub></FaGithub> Github Log in
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h4>Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaSnapchat></FaSnapchat> SnapChat
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSIdeNav;
