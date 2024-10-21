import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import ProductsCardList from "./components/Products/productsCardList";
import "./App.css";

export const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Header cart={0} />
      <ProductsCardList />
      <Footer />
    </div>
  );
};

export default App;
