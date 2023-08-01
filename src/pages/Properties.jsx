import HeadTitle from "../components/HeadTitle";
import PropertiesCards from "../components/PropertiesCards";

const Properties = () => {
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
        <PropertiesCards hitsPerPage={8} hasPaginate={true} />
      </div>
    </section>
  );
};

export default Properties;
