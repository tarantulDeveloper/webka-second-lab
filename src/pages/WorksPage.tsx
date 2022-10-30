import React, {FC} from "react";
import Navbar from "../components/Navbar";
import Images from "../data/images";
import BottomDiv from "../components/BottomDiv";
import Footer from "../components/Footer";

const WorksPage: FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid text-center bg-blue text-white pt-3 pb-4 ">
        <h5 className="text-uppercase">
          We work hard to achieve excellence
        </h5>
        <h6 style={{fontWeight: "lighter"}} className="text-uppercase">and we are happy to do it</h6>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={Images.p1} alt="phone" className="img-fluid"/>
          </div>
          <div className="col-sm-12 col-md-6">
              <h5 className="text-uppercase">client name</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam
              culpa eius enim facere quaerat, tenetur totam ullam. Consectetur inventore praesentium
              quo, reiciendis sint sunt.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <BottomDiv/>
          </div>
        </div>
        <hr/>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={Images.p2} alt="phone" className="img-fluid"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="text-uppercase">client name</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam
              culpa eius enim facere quaerat, tenetur totam ullam. Consectetur inventore praesentium
              quo, reiciendis sint sunt.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <BottomDiv/>
          </div>
        </div>
        <hr/>
      </div>

      <div className="container mt-5 pb-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
            <img src={Images.p3} alt="phone" className="img-fluid"/>
          </div>
          <div className="col-sm-12 col-md-6">
            <h5 className="text-uppercase">client name</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aperiam
              culpa eius enim facere quaerat, tenetur totam ullam. Consectetur inventore praesentium
              quo, reiciendis sint sunt.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <BottomDiv/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default WorksPage;
