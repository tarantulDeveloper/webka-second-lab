import React from 'react';
import {BsCircle} from "react-icons/bs";
import {GiLinkedRings} from "react-icons/gi";

const BottomDiv = () => {
  return (
    <div className="bottom-div">
      <div className="d-flex align-items-center">
        <BsCircle color="red" className="ms-1"/>
        <div className="ms-2">Mobile Design</div>
      </div>
      <div className="d-flex align-items-center">
        <BsCircle color="red" className="ms-1"/>
        <div className="ms-2">Web Design</div>
      </div>
      <div className="d-flex align-items-center">
        <BsCircle color="red" className="ms-1"/>
        <div className="ms-2">Development</div>
      </div>
      <div className="d-flex align-items-center">
        <GiLinkedRings color="red" className="ms-1"/>
        <div className="ms-2" style={{color: '#fe7877'}}>Example.com</div>
      </div>
    </div>
  );
};

export default BottomDiv;