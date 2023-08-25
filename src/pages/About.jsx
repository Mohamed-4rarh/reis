import { about1, about2, about3, about4, about5 } from "../assets";
import HeadTitle from "../components/HeadTitle";

const About = () => {
  return (
    <div className="">
      <div className="hero">
        <div className='py-[120px] px-[30px] relative'>
          <HeadTitle h={'text-white'} p={'text-[#EDEFF6]'} hText={'About Us'} />
        </div>
      </div>
      <div className="mt-[100px] mb-[50px] text-center max-w-[700px] mx-auto">
        <h3 className=" font-bold text-[30px] mb-5 text-[#363a3d]">Our Story</h3>
        <span className="text-base font-normal text-[#6d737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt alias aliquid recusandae commodi impedit ut repudiandae. Nulla facilis ratione numquam architecto sed molestias repellendus, fugit cumque temporibus incidunt nobis, laboriosam quasi enim dicta eveniet vitae nam veritatis quae! Natus maiores impedit repellendus incidunt nihil, esse quae quas vitae mollitia.</span>
      </div>

      <div className="flex flex-wrap justify-center gap-[100px] items-center bg-[#edeff6] py-[50px]">
        <img className="w-[450px] h-[280px] rounded-lg" src={about1} alt="img" />
        <div className="flex flex-col text-center">
          <h3 className=" font-bold text-[30px] mb-5 text-[#363a3d]">Our Founding</h3>
          <p className="max-w-[450px] text-base font-normal text-[#6d737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse flex-wrap justify-center gap-[100px] items-center py-[50px]">
        <img className="w-[450px] h-[280px] rounded-lg" src={about2} alt="img" />
        <div className="flex flex-col text-center">
          <h3 className=" font-bold text-[30px] mb-5 text-[#363a3d]">Early Grouth & Funding</h3>
          <p className="max-w-[450px] text-base font-normal text-[#6d737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[100px] items-center bg-[#edeff6] py-[50px]">
        <img className="w-[450px] h-[280px] rounded-lg" src={about3} alt="img" />
        <div className="flex flex-col text-center">
          <h3 className=" font-bold text-[30px] mb-5 text-[#363a3d]">Series B Funding</h3>
          <p className="max-w-[450px] text-base font-normal text-[#6d737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
        </div>
      </div>
      <div className="flex flex-wrap flex-row-reverse justify-center gap-[100px] items-center py-[50px]">
        <img className="w-[450px] h-[280px] rounded-lg" src={about4} alt="img" />
        <div className="flex flex-col text-center">
          <h3 className=" font-bold text-[30px] mb-5 text-[#363a3d]">A New Life!</h3>
          <p className="max-w-[450px] text-base font-normal text-[#6d737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[100px] items-center bg-[#edeff6] py-[50px]">
        <img className="w-[450px] h-[280px] rounded-lg" src={about5} alt="img" />
        <div className="flex flex-col text-center">
          <h3 className=" font-bold text-[30px] mb-5 text-[#363a3d]">To Infinity and Beyond!</h3>
          <p className="max-w-[450px] text-base font-normal text-[#6d737a]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolor possimus consequuntur dignissimos aliquam? Ducimus illo deleniti commodi. Necessitatibus, labore?</p>
        </div>
      </div>
    </div>
  );
};

export default About;
