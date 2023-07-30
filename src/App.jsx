import Home from "./pages/Home";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Properties from "./pages/Properties";
import Agents from "./pages/Agents";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PropertyPage from "./pages/PropertyPage";
import Root from "./layouts/Root";
import { useFetch } from "./hooks/useFetch";

import React, { useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const properties = React.createContext();

function App() {
  const [propertiesData, setPropertiesData] = useState([]);
  useEffect(() => {
    //params of API get requist
    const getParams = {
      locationExternalIDs: "5002,6020",
      purpose: "for-rent",
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    };
    //fetch properties data from api
    const GetData = async () => {
      const response = await useFetch(
        "https://bayut.p.rapidapi.com/properties/list",
        getParams
      );
      setPropertiesData(response.hits);
    };
    GetData();
  }, []);

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={
          <properties.Provider value={propertiesData}>
            <Root />
          </properties.Provider>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="agents" element={<Agents />} />
        <Route path="properties">
          <Route index element={<Properties />} />
          <Route path=":externalID" element={<PropertyPage />} />
        </Route>
        <Route path="gallery" element={<Gallery />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
}

export default App;
