import ContactUs from "../components/ContactUs";
import HeadTitle from "../components/HeadTitle";

const Contact = () => {
  return (
    <section className="py-[85px] bg-[#EDEFF6]">
      <div className="flex flex-col gap-10">
        <HeadTitle hText={'Contact Us'} h={'text-[#1E2640]'} p={'text-[#889099] max-w-[470px]'} />
        <ContactUs />
      </div>
    </section>
  );
};

export default Contact;
