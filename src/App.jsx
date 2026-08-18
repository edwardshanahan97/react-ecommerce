import Announcement from "./components/Announcement/Announcement";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Announcement />

      <Navbar />

      <Home />

      <Footer />
    </div>
  );
};

export default App;
