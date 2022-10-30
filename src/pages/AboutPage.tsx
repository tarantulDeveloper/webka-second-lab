import React, {FC} from "react";
import Navbar from "../components/Navbar";
import "./AboutPage.scss";
import Images from "../data/images";
import CardPeople from "../components/CardPeople";
import {CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Footer from "../components/Footer";


const AboutPage: FC = () => {


  return (
    <div>
      <Navbar/>
      <div className="container-fluid text-center bg-blue text-white pt-3 pb-4 ">
        <h5>Learn More About Us</h5>
        <h5 style={{fontWeight: "lighter"}}>We Are Cool People</h5>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardPeople src={Images.pic1} email="@Frank_BlackTie" personName="Frank Lampard"/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardPeople src={Images.pic2} personName="David Wright" email="@David_BlackTie"/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardPeople src={Images.pic3} personName="Mark Milestone" email="@Mark_BlackTie"/>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <CardPeople src={Images.pic4} personName="Tania Tissen" email="@Tania_BlackTie"/>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-gray pt-3">
        <div className="container">
          <div className="row pt-5 pb-4">
            <h5 className="text-center text-uppercase">
              Our Skills
            </h5>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card border-0 bg-gray text-center">
                <CircularProgressbar value={0.90} maxValue={1} text="90%" strokeWidth={3}
                                     className='w-50 align-self-center'/>
                <div className="card-body">
                  <h5 className="card-title">
                    Design & Brand
                  </h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card border-0 bg-gray text-center">
                <CircularProgressbar value={0.8} maxValue={1} text="80%" strokeWidth={3}
                                     className='w-50 align-self-center'/>
                <div className="card-body">
                  <h5 className="card-title">
                    Web Development
                  </h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card border-0 bg-gray text-center">
                <CircularProgressbar value={0.75} maxValue={1} text="75%" strokeWidth={3}
                                     className='w-50 align-self-center'/>
                <div className="card-body">
                  <h5 className="card-title">
                    Seo Services
                  </h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="card border-0 bg-gray text-center">
                <CircularProgressbar value={0.6} maxValue={1} text="60%" strokeWidth={3}
                                     className='w-50 align-self-center'/>
                <div className="card-body">
                  <h5 className="card-title">
                    Printing
                  </h5>
                  <p className="card-text">
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
