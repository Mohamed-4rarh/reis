import Hero from "../components/Hero";
import SearchByArea from "../components/SearchByArea";
import SearchByType from "../components/SearchByType";
import SearchByRent from "../components/SearchByRent";
import SearchByLocation from "../components/SearchByLocation";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchByArea />
      <SearchByType />
      <SearchByRent />
      <SearchByLocation />
      <ContactUs />
    </>
  );
};

export default Home;
