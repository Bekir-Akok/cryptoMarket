import Header from "../../Components/Header/Header";
import Cards from "../../Components/Cards/Cards";
import Footer from "../../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="cards">
          <Cards />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
