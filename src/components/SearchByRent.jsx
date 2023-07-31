import Button from "./Button";
import HeadTitle from "./HeadTitle";
import PropertiesCards from "./PropertiesCards";

import { useContext } from "react";
import { properties } from "../App";
import { Link } from "react-router-dom";

const SearchByRent = () => {
  const { propertiesData } = useContext(properties);
  const targetData = propertiesData.slice(0, 4);
  return (
    <section className="py-[85px]">
      <div className="flex flex-col gap-11 items-center">
        <HeadTitle
          hText={"Properties by Rent Range"}
          h={"text-[#1E2640]"}
          p={"max-w-[470px] text-[#889099]"}
        />
        <PropertiesCards propertiesData={targetData} />
        <Link to="properties">
          <Button
            text={"load more listing"}
            bg={"bg-[#4A60A1]"}
            color={"text-[#fff]"}
          />
        </Link>
      </div>
    </section>
  );
};

export default SearchByRent;
