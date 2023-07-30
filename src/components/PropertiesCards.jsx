/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import {
  carParkImg,
  bathtubImg,
  arrowsOutImg,
  personImg,
  favImg,
  addImg,
  shareImg,
} from "../assets";

const PropertiesCards = ({ propertiesData }) => {
  return (
    <section>
      <div className="flex flex-wrap gap-[30px] justify-center">
        {propertiesData.map((property) => (
          <Link key={property.id} to={property.externalID}>
            <div className="flex flex-col py-[15px] px-[13px] w-[380px] border-2 rounded-[10px] gap-5">
              <img
                className="w-full h-[200px] rounded-[10px]"
                src={property.coverPhoto.url}
                alt=""
              />
              <div className="flex flex-row justify-between">
                <span className=" capitalize font-semibold text-[#4A60A1] text-base">
                  {property.purpose}
                </span>
                <span className="text-[#fff] bg-[#4A60A1] items-center p-1 rounded-lg font-normal text-[14px]">
                  {property.isVerified ? "verified" : "not verified"}
                </span>
              </div>
              <p className="text-[#6D737A] max-w-[300px] h-[50px]">
                {property.title}
              </p>
              <div className=" flex flex-row justify-between text-[#6D737A]">
                <span className=" font-semibold text-[#4A60A1]">
                  ${property.price}
                </span>
                <span>{property.rentFrequency}</span>
              </div>

              <div className="flex gap-4">
                <div className="flex gap-1 text-[#6D737A]">
                  <img src={carParkImg} alt="parking" />{" "}
                  <span>{property.rooms}</span>
                </div>
                <div className="flex gap-1 text-[#6D737A]">
                  <img src={bathtubImg} alt="bathrooms" />{" "}
                  <span>{property.baths}</span>
                </div>
                <div className="flex gap-1 text-[#6D737A]">
                  <img src={arrowsOutImg} alt="area" />{" "}
                  <span>{property.area} m</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 font-semibold text-[#4A60A1]">
                  <img
                    className="w-[30px] h-[30px]"
                    src={personImg}
                    alt="person"
                  />{" "}
                  {property.contactName}
                </div>
                <div className="flex gap-2 items-center">
                  <img className="w-[20px] h-[20px]" src={addImg} alt="add" />
                  <img className="w-[20px] h-[20px]" src={favImg} alt="fav" />
                  <img
                    className="w-[20px] h-[20px]"
                    src={shareImg}
                    alt="share"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PropertiesCards;
