import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Silder from "./components/Silder";
import Recommenend from "./components/Recommenend";
import Topics from "./components/Topics";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Categories></Categories>
      <Silder></Silder>
      <Recommenend></Recommenend>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
