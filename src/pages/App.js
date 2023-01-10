import AboutUs from "../components/AboutUs";
import Map from "../components/Map";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Services from "../components/Services";
import Hero1 from "../components/Hero1";


function App() {
  return (
    <div className="relative">
      <Header />
      <div className="bg-blue-gray-50 mb-6">
        <Services />
      </div>
      <Map />
      <AboutUs />
      <Footer />
    </div >
  );
}

export default App;
