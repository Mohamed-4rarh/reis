import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PropertyPage from "./pages/PropertyPage";
import Root from "./layouts/Root";
import ContactUs from "./components/ContactUs";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="agents" element={<Agents />} />
        <Route path="properties">
          <Route index element={<Properties />} />
          <Route path=":externalID" element={<PropertyPage />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
