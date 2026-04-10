import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import BodyContainer from "../../components/BodyContainer/BodyContainer";


import Img1 from "../../assets/cherry.jpg";
import Img2 from "../../assets/roses.jpg";
import Img3 from "../../assets/tulip.jpg";
import Img4 from "../../assets/lilys.jpg";
import Img5 from "../../assets/sunflowers.jpg";

const Products = [
  {
    id: 1,
    title: "Flower Blossom",
    price: 550,
    description: "cherry fresh flower bouquet",
    image: Img1
  },
  {
    id: 2,
    title: "Rose Bouquet",
    price: 375,
    description: "Red roses for special occasions",
    image: Img2
  },
  {
    id: 3,
    title: "Tulip Delights",
    price: 600,
    description: " tulip flowers",
    image: Img3
  },
  {
    id: 4,
    title: "Lilies",
    price: 450,
    description: "Elegant pink lilies",
    image: Img4
  },
  {
    id: 5,
    title: "Sunflower Bunch",
    price: 400,
    description: "Bright and cheerful sunflowers",
    image: Img5
  }
];

function Home() {
  return (
    <div className="home">
      <Navbar active="home" />
      

      <BodyContainer>
        <h1>Welcome to Home Page</h1>
      

        <div className="product-container">
          {Products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.title} width="150" />
              <h3>{product.title}</h3>
              <p>₹ {product.price}</p>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </BodyContainer>

      <Footer />
    </div>
  );
}

export default Home;






