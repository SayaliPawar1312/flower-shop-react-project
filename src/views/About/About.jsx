import BodyContainer from "../../components/BodyContainer/BodyContainer";
import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";  

const AboutData = [
  {
    id: 1,
    title: " Who We Are",
    description: "Hand-picking the finest blooms to turn your ordinary days into extraordinary memories."
  },
  {
    id: 2,
    title: " Our Collection",
    description: "From classic red roses to rare exotic lilies, explore a world of colors and fragrances."
  },
  {
    id: 3,
    title: " Our Mission",
    description: "Our mission is simple: to deliver joy, one bouquet at a time, straight to your doorstep."
  },
  {
    id: 4,
    title: " Fast Delivery",
    description: "Speed meets freshness. We ensure your flowers arrive in perfect bloom, exactly when you need them."
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