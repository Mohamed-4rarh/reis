import { logo } from "../assets";
import { footerLinks, socialMediaIcons } from "../constants";

const Footer = () => {
  return (
    <section className="py-[50px] px-[100px]">
      <div className="px-[100px] flex  flex-row justify-between">
        <div className="flex flex-col gap-[20px] items-start">
          <img src={logo} alt="logo" />
          <div className="flex flex-col gap-[13px]">
            <h3 className="text-[31B1D1F] font-semibold text-2xl">
              contact us
            </h3>
            <span className="text-[#6D737A] font-normal text-base">
              call: +20 109 942 7902
            </span>
            <p className="text-[#6D737A] font-normal text-base max-w-[470px]">
              Praesent nulla massa, hendrerit <br /> vestibulum gravida in,
              feugiat auctor felis.
            </p>
            <span className="text-[#363A3D] font-normal text-base">
              Email: dev.mohamedadham@gmail.com
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
          <div className="flex flex-col gap-8" key={index}>
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
    </section>
  );
};

export default Footer;
