import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="app">
      <Announcement />

      <Navbar />

      <Home />
    </div>
  );
};

export default App;
