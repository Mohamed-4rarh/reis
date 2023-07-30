import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const PropertyPage = () => {
  const { externalID } = useParams();
  const [allData, setAllData] = useState([]);
  // const [property, setProperty] = useState([]);

  useEffect(() => {
    const GetData = async () => {
      const response = await useFetch(
        "https://bayut.p.rapidapi.com/properties/detail",
        { externalID }
      );
      setAllData(response);
    };
    GetData();
  }, [externalID]);

  console.log(allData);

  return (
    <section>
      <div className="">
        <div className="property_img">{allData.area}</div>
        <div className="property_info"></div>
      </div>
    </section>
  );
};

export default PropertyPage;
