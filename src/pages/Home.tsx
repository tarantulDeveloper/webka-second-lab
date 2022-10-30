import {FC} from "react";
import Navbar from "../components/Navbar";
import {AiFillHeart, AiFillTrophy} from "react-icons/ai";
import {BsLaptop} from "react-icons/bs";
import TextIcon from "../components/TextIcon";
import Images from "../data/images";
import Footer from "../components/Footer";

const Home: FC = () => {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetchMessage();
  // }, []);

  // const fetchMessage = async () => {
  //   try {
  //     const response = await axios.get<string>("http://localhost:4070");
  //     console.log(response)
  //     setMessage(response.data);
  //   } catch (error) {}
  // };
  return (
    <div style={{position: "relative"}}>
      <Navbar
        style={{position: "absolute", top: "0", right: "0", left: "0"}}
      />
      <div className="banner-image vh-100 d-flex justify-content-center align-items-center img-fluid">
        <div className="content text-center">
          <h1>It Doesn't Take a</h1>
          <h1>
            Rocket <span className="science">Scientist</span>
          </h1>
          <h4 className="designer">It Takes a Designer</h4>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row gx-5">
          <TextIcon
            icon={<AiFillHeart color="red" style={{fontSize: "45px"}}/>}
            title="DESIGN"
          />
          <TextIcon
            icon={<BsLaptop color="red" style={{fontSize: "45px"}}/>}
            title="BOOTSTRAP"
          />
          <TextIcon
            icon={<AiFillTrophy color="red" style={{fontSize: "45px"}}/>}
            title="SUPPORT"
          />
        </div>
      </div>

      <div className="container-fluid d-flex flex-column bg-gray mt-5">
        <h5 className="text-center" style={{marginTop: "80px"}}>
          LATEST WORKS
        </h5>
        <div className="container d-flex justify-content-around mt-4 mb-5 ">
          <div className="row">
            <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center blur">
              <img src={Images.p1} alt="phone" className="img-fluid "/>
            </div>
            <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center blur">
              <img src={Images.p3} alt="phone" className="img-fluid"/>
            </div>
            <div className="col-sm-12 col-md-4 d-flex align-items-center justify-content-center blur">
              <img src={Images.p2} alt="phone" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column text-center mb-5 align-items-center justify-content-center">
        <div className="row">
          <div className="col">
            <h5 className="mt-5">WE CREATE FIRST CLASS DESIGN</h5>

            <p>
              By being true to the brand we represent, we elevate the audience's
              relationship to it. Like becomes love becomes a passion. Passion
              becomes advocacy. And we see the brand blossom from within,
              creating whole story the audience embraces. That's when the brand
              can truly flex its muscles.
            </p>
          </div>
        </div>
      </div>

      <div className="container d-flex align-items-center ">
        <div className="row">
          <div className="col">
            <img src={Images.munter} alt="munter" className=" img-fluid"/>
          </div>
        </div>
      </div>

      <div className="container-fluid pb-4 bg-light-gray pt-4">
        <h5 className="text-center">OUR AWESOME CLIENTS</h5>

        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <img src={Images.c1} alt="c1" className="img-fluid"/>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img src={Images.c2} alt="c2" className="img-fluid"/>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img src={Images.c3} alt="c3" className="img-fluid"/>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img src={Images.c4} alt="c4" className="img-fluid"/>
            </div>
            <div className="col d-flex justify-content-center align-items-center">
              <img src={Images.c5} alt="c5" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
