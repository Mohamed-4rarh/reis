import { logo } from "../assets";
import { footerLinks, socialMediaIcons } from "../constants";

const Footer = () => {
  return (
    <section className="pt-[50px] sm:px-[100px] px-5">
      <div className=" 2xl:px-[100px] flex-col text-center lg:flex-row flex flex-wrap justify-between pb-[30px] ">
        <div className="flex flex-col gap-[20px] items-center lg:items-start">
          <img src={logo} alt="logo" />
          <div className="flex flex-col gap-[13px]">
            <h3 className="text-[31B1D1F] font-semibold text-2xl">
              contact us
            </h3>
            <span className="text-[#6D737A] font-normal text-base">
              call: +123 400 123
            </span>
            <p className="text-[#6D737A] font-normal text-base max-w-[470px]">
              Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
              feugiat auctor felis.
            </p>
            <span className="text-[#363A3D] font-normal text-base">
              Email: realstate@mail.com
            </span>
          </div>
          <div className="flex flex-row flex-1 gap-[13px]">
            {socialMediaIcons.map((social) => (
              <img
                className=" cursor-pointer rounded-md"
                src={social.icon}
                key={social.id}
                alt="social link"
              />
            ))}
          </div>
        </div>
        {footerLinks.map((link, index) => (
          <div className="flex flex-col gap-8 my-5 sm:my-0" key={index}>
            <h4 className="text-[#1B1D1F] font-semibold text-xl capitalize">
              {link.title}
            </h4>
            <ul className="flex flex-col gap-4 list-none">
              {link.links.map((link, index) => (
                <li
                  className="cursor-pointer capitalize font-normal text-base text-[#6D737A] hover:text-[#4A60A1]"
                  key={index}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="w-full py-6 sm:px-[100px] px-0 text-center align-middle border-t-[1px] border-[#eedff6]">
        <div className="text-[#6d737a] font-normal text-center">
          <span>
            Copyright{" "}
            <span className="text-[#4a60a1] font-normal">
              &copy; 2023 REIS.
            </span>{" "}
            All Rights Reserved,{" "} <br className="sm:hidden block" />
          </span>
          <span>
            Developed By{" "}
            <span className="text-[#4a60a1] font-normal">Mohamed Adham</span>{" "}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
