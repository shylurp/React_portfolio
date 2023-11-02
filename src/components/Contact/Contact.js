import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@material-ui/core";
import { Instagram, Facebook, LinkedIn } from "@material-ui/icons";
import "./Contact.css";

const Contact = () => {
  return (
    <Element className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact__container">
        <p>
          Email : <span>shylurp15@gmail</span>
        </p>
        <p>
          Github Username : <span>shylurp</span>
        </p>
        <div className="contact__icons">
          <a href="google.com">
            <IconButton>
              <Instagram />
            </IconButton>
          </a>
          <a href="google.com">
            <IconButton>
              <Facebook />
            </IconButton>
          </a>
          <a href="https://www.linkedin.com/in/shylajadevi-arunprasath-826a51275/">
            <IconButton>
              <LinkedIn />
            </IconButton>
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
