import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { arrowsOutImg, bathtubImg, carParkImg, personImg } from "../assets";

const PropertyPage = () => {
  const {externalID} = useParams();
  const [propertyData, setPropertyData] = useState();
  useEffect(() => {
    const GetData = async () => {
      const response = await useFetch('https://bayut.p.rapidapi.com/properties/detail', {externalID})
      setPropertyData(response)
    }
    GetData()
  }, [externalID])
  console.log(propertyData)

  return (
    <section className="py-[85px] sm:px-[50px] px-5 bg-[#EDEFF6]">
      {propertyData && (
        <div className="flex flex-col gap-10">
          <div className="flex sm:gap-5 gap-3 overflow-x-auto">
            {propertyData.photos.map((photo) => (
              <img
                src={photo.url}
                key={photo.id}
                className="sm:w-[360px] w-[320px] h-[200px] sm:h-[240px] rounded-md"
                alt="photo"
              />
            ))}
          </div>
          <div className="flex flex-col sm:gap-5 gap-4">
            <div className="flex justify-between text-center items-center">
              <span className="capitalize font-semibold text-[#4A60A1] text-lg">
                {propertyData.purpose}
              </span>
              <span className="text-[#fff] bg-[#4A60A1] items-center p-1 rounded-lg font-normal text-[14px]">
                {propertyData.state}
              </span>
              <span className=" text-[#fff] bg-[#4A60A1] items-center p-1 rounded-lg font-normal text-[14px]">
                {propertyData.furnishingStatus}
              </span>
              <span className="text-[#fff] bg-[#4A60A1] items-center p-1 rounded-lg font-normal text-[14px] hidden sm:block ">
                {propertyData.isVerified ? "verified" : "not verified"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="capitalize font-semibold text-[#4A60A1] text-base">
                $ {propertyData.price}
              </span>
              <span className="text-[#6D737A] capitalize">
                {propertyData.rentFrequency} rent
              </span>
            </div>
            <div className="flex gap-5">
              <div className="flex gap-2 items-center">
                <img src={carParkImg} alt="parking" />
                <span className="text-[#6d737a]">{propertyData.rooms}</span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={bathtubImg} alt="bathtub" />
                <span className="text-[#6d737a]">{propertyData.baths}</span>
              </div>
              <div className="flex gap-2 items-center">
                <img src={arrowsOutImg} alt="area" />
                <span className="text-[#6d737a]">{propertyData.area}</span>
              </div>
            </div>
            <p className=" capitalize font-semibold text-[#6D737A]">
              {propertyData.location[propertyData.location.length - 1].name}
            </p>
            <p className="text-[#6D737A] capitalize">
              {propertyData.title}. <br /> <br />
              {propertyData.description}.
            </p>
            <div className="flex gap-2 items-center">
              <img src={personImg} alt="" />
              <span className=" font-semibold text-[#4a60a1]">
                {propertyData.contactName}
              </span>
              <span className="text-[#fff] bg-[#4A60A1] items-center p-1 rounded-lg font-normal text-[11px] ml-2">
                {propertyData.isVerified ? "verified" : "not verified"}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyPage;
