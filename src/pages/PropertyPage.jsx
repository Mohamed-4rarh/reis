import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { addImg, arrowsOutImg, bathtubImg, carParkImg, dLoadingGif, favImg, personImg, shareImg } from "../assets";
import Loader from "../components/Loader";

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
    <section className="py-[85px] sm:px-[50px] items-center flex flex-col px-5 bg-[#EDEFF6]">
      {propertyData ? (
        <div className="flex flex-col gap-10 xl:w-[1200px]">
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
              <div className="flex gap-4">
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
            <div className="flex justify-between">
              <p className=" capitalize font-semibold text-[#6D737A]">
                {propertyData.location[propertyData.location.length - 1].name}
              </p>
              <div className="flex gap-2 items-center">
                <img className=" border-[1px] border-white rounded-sm w-[24px] h-[24px]" src={addImg} alt="add" />
                <img className=" border-[1px] border-white rounded-sm w-[24px] h-[24px]" src={favImg} alt="fav" />
                <img className=" border-[1px] border-white rounded-sm w-[24px] h-[24px]" src={shareImg} alt="share" />
              </div>
            </div>
            <p className="text-[#6D737A] capitalize">
              {propertyData.title}. <br /> <br />
              {propertyData.description}.
            </p>
            <div className="flex gap-2 items-center mt-5">
              <img src={personImg} alt="" />
              <span className=" font-semibold text-[#4a60a1]">
                {propertyData.contactName}
              </span>
              <span className="text-[#fff] bg-[#4A60A1] items-center p-1 rounded-lg font-normal text-[11px] ml-2">
                {propertyData.isVerified ? "verified" : "not verified"}
              </span>
            </div>
            <span className="capitalize text-[#6d737a]">mobile: {propertyData.phoneNumber.mobile}</span>
            <span className="capitalize text-[#6d737a]">whatsapp: {propertyData.phoneNumber.whatsapp}</span>
          </div>
        </div>
      ): <Loader loadingGif={dLoadingGif} />}
    </section>
  );
};

export default PropertyPage;
