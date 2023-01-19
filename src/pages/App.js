import AboutUs from "../components/AboutUs";
import Map from "../components/Map";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Services from "../components/Services";
import Team from "../components/Team";
import Hero1 from "../components/Hero1";
import ContentUs from "../components/ContentUs";


function App() {
  return (
    <div className="relative bg-blue-gray-50">
      <Header />
      <div className=" mb-6">
        <Services />
      </div>
      <Map />
      <Team />
      <AboutUs />
      <ContentUs />
      <Footer />
    </div >
  );
}

export default App;
