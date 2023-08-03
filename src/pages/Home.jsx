import Hero from "../sections/Hero";
import SearchByArea from "../sections/SearchByArea";
import SearchByType from "../sections/SearchByType";
import SearchByRent from "../sections/SearchByRent";
import SearchByLocation from "../sections/SearchByLocation";
import ContactUs from "../sections/ContactUs";

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
