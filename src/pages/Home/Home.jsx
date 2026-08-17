import Departments from "./Departments/Departments";
import Hero from "./Hero/Hero";
import NewIn from "./NewIn/NewIn";
import Edit from "./Edit/Edit";
import "./Home.css";
import Newsletter from "./Newsletter/Newsletter";

const Home = () => {
  return (
    <main>
      <Hero />

      <NewIn />

      <Departments />

      <div className="home__col">
        <Edit />

        <Newsletter />
      </div>
    </main>
  );
};

export default Home;
