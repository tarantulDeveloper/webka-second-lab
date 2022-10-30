import React from 'react';
import {FaDribbble, FaFacebookF, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="pt-5 pb-3 bg-pink text-white">
        <div className="container px-5 text-center">

          <div className="row">
            <div className="col px-4">
              <h5>
                WE ARE STORYTELLERS. BRANDS ARE OUR SUBJECTS. DESIGN IS OUR
                VOICE.
              </h5>
              <p>
                We believe ideas come from everyone, everywhere. At BlackTie,
                everyone within our agency walls is a designer in their own
                right. And there are a few principles we believe&mdash;and we
                believe everyone should believe&mdash;about our design cratft.
                These truth drive us, motivate us, and ultimately help us
                redefine the power of design.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center bg-light-black py-3 ">
        <div className="d-flex justify-content-between">
          <FaTwitter color="white" style={{fontSize: "3vh"}}/>
          <FaFacebookF
            className="mx-5"
            color="white"
            style={{fontSize: "3vh"}}
          />
          <FaDribbble color="white" style={{fontSize: "3vh"}}/>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3">
        &copy; Copyrights
      </div>
    </div>
  );
};

export default Footer;