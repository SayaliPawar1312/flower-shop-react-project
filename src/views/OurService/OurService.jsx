import "./OurService.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";  


function OurService() {
  return (
    <div className="ourservice">
      <Navbar  active="services"/>
     
      <BodyContainer>
      <h1>Our Services</h1>
      <p>Here are the services we offer!</p>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default OurService;