import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import ProductsCardList from "./components/Products/productsCardList";
import "./App.css";

const products = {
  id: 1,
  name: "Product 1",
  price: 10.99,
};


export const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Header cart={0} />
      <ProductsCardList products={products} />
      <Footer />
    </div>
  );
};

export default App;
