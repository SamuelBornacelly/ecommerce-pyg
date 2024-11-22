import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Router } from "./Router";
export const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default App;
