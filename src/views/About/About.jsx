import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";  

const AboutData = [
  {
    id: 1,
    title: " Who We Are",
    description: "We are a flower shop providing fresh and beautiful flowers for every occasion."
  },
  {
    id: 2,
    title: " Our Collection",
    description: "We offer roses, tulips, lilies, sunflowers and many more varieties of flowers."
  },
  {
    id: 3,
    title: " Our Mission",
    description: "Our mission is to spread happiness and love through fresh and elegant flowers."
  },
  {
    id: 4,
    title: " Fast Delivery",
    description: "We ensure quick and safe delivery so your flowers reach fresh and on time."
  }
];

function About() {
  return (
    <div className="about">
      <Navbar active="about" />

      <BodyContainer>
        <h1 className="about-title">About Us </h1>
        <p className="about-subtitle">Know more about our shop</p>

        <div className="about-container">
          {AboutData.map((item) => (
            <div key={item.id} className="about-card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default About;