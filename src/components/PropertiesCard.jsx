import { useEffect, useState } from "react";

import { useFetch } from "../hooks/useFetch";

const PropertiesCard = () => {
  const [allProperties, setAllProperties] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const response = await useFetch(
        "https://bayut.p.rapidapi.com/properties/list"
      );
      setAllProperties(response);
    };
    GetData();
  }, []);
  console.log(allProperties);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default PropertiesCard;
