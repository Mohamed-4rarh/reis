import HeadTitle from "../components/HeadTitle";
import PropertiesCards from "../components/PropertiesCards";
import { properties } from "../App";
import { useContext } from "react";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

const Properties = () => {
  const { propertiesData, setPage } = useContext(properties);
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePaginate = (data) => {
    const currentPage = data.selected;
    setSearchParams({ page: currentPage });
    setPage(searchParams.get('page'));
  };

  return (
    <section>
      <div className="category py-[65px]">
        <div className="relative">
          <HeadTitle
            hText={"Properties"}
            h={"text-[#fff]"}
            p={"text-[#E7E9EB]"}
          />
        </div>
      </div>
      <div className="py-[150px] items-center">
        <PropertiesCards propertiesData={propertiesData} />
        <ReactPaginate
          className=" flex justify-center gap-5 mt-[80px]"
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={4}
          onPageChange={handlePaginate}
          previousClassName="bg-[#EDEFF6] text-[#6D737A] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
          nextClassName="bg-[#4A60A1] text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
          activeClassName="bg-[#4A60A1] text-[#fff] "
          pageClassName="font-semibold text-[#4A60A1] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
        />
      </div>
    </section>
  );
};

export default Properties;
