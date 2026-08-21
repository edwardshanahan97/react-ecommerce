import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/shop/:category/product/:id" element={<Product />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
