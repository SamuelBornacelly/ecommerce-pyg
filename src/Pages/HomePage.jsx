import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import ProductsCardList from "../components/Products/productsCardList";

export const HomePage = () => {
  const products = {
    id: 1,
    name: "Product 1",
    price: 10.99,
  };

  return (
    <div>
      <Header cart={0} />
      <ProductsCardList products={products} />
    </div>
  );
};
