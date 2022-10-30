import React, {FC, useState} from "react";
import Navbar from "../components/Navbar";
import TextIcon from "../components/TextIcon";
import {MdMonitor, MdSettingsSuggest, MdShoppingCart, MdCloud} from "react-icons/md";
import {ImEye} from "react-icons/im";
import {AiTwotoneHeart} from "react-icons/ai";
import "./ServicePage.scss";
import PlanCard from "../components/PlanCard";
import Footer from "../components/Footer";

const ServicePage: FC = () => {
  const fArray = ['10GB Storage', 'Up to 10 Users', '5 Domains', 'Free Setup', '1-year Free Support*'];
  const sArray = ['20GB Storage', 'Up to 20 Users', '10 Domains', 'Free Setup', '2-year Free Support*'];
  const tArray = ['150GB Storage', 'Unlimited Users', '50 Domains', 'Free Setup', '5-year Free Support*']

  return (
    <div>
      <Navbar/>
      <div className="container-fluid text-center bg-blue text-white pt-3 pb-4 ">
        <h5 className="text-uppercase">
          We can do a lot of things
        </h5>
        <h6 style={{fontWeight: "lighter"}} className="text-uppercase">just take a look & contact us</h6>
      </div>

      <div className="container mt-5">
        <div className="row">
          <TextIcon icon={<MdMonitor color="red" style={{fontSize: "30px"}}/>} title="Web design"/>
          <TextIcon icon={<MdSettingsSuggest color="red" style={{fontSize: "30px"}}/>} title="Web development"/>
          <TextIcon icon={<ImEye color="red" style={{fontSize: "30px"}}/>} title="seo services"/>
          <TextIcon icon={<AiTwotoneHeart color="red" style={{fontSize: "30px"}}/>} title="social media"/>
          <TextIcon icon={<MdShoppingCart color="red" style={{fontSize: "30px"}}/>} title="e-commerce"/>
          <TextIcon icon={<MdCloud color="red" style={{fontSize: "30px"}}/>} title="cloud services"/>
        </div>
      </div>

      <div className="container-fluid bg-gray pb-5">
        <div className="row pt-5 pb-2">
          <h5 className="text-uppercase text-center">
            pricing plans
          </h5>
        </div>
        <div className="container">
          <div className="row">
            <PlanCard title="starter" number="19" descriptions={fArray}/>
            <PlanCard title="standard" number="29" descriptions={sArray}/>
            <PlanCard title="ultimate" number="69" descriptions={tArray}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ServicePage;
