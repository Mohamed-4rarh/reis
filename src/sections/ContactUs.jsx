import HeadTitle from '../components/HeadTitle'
import Button from '../components/Button'
import { Toaster, toast } from 'react-hot-toast'
import {useForm} from 'react-hook-form'

const ContactUs = () => {
  const form = useForm();
  const {register, handleSubmit, formState, reset} = form
  const {errors} = formState
  const onSubmit = () => {
    toast.success('Successflly Sent!')
    reset()
  }
  
  return (
    <section id="contact" className="bg-[#EDEFF6] py-[85px] px-3">
      <div className="flex flex-col gap-10 max-w-[900px] mx-auto">
        <HeadTitle
          hText={"Contact Us"}
          h={"text-[#1E2640]"}
          p={"text-[#889099] max-w-[470px]"}
        />
        <div className="p-[30px] bg-[#fff] rounded-xl shadow-lg shadow-[#3b4d8114] flex flex-col gap-5 items-center">
          <div className="w-full">
            <h3 className="capitalize font-bold text-[24px] text-[#434343]">
              Enquiry Form
            </h3>
            <p className="text-[#576074] font-normal text-base">
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center gap-3"
          >
            <div className="flex flex-col sm:flex-row gap-3 items-start justify-center w-full">
              <div className="flex-1 w-full">
                <input
                  {...register("fname", {
                    required: {
                      value: true,
                      message: "First Name Is Required!",
                    },
                  })}
                  id="fname"
                  type="text"
                  placeholder="first name"
                  className="flex flex-col py-4 px-3 border-[1px] rounded focus:outline-none w-full"
                />
                <p className="text-left font-medium text-[12px] ml-3 text-red-500">
                  {errors.fname?.message}
                </p>
              </div>
              <div className="flex-1 w-full">
                <input
                  {...register("lname", {
                    required: {
                      value: true,
                      message: "Last Name Is Required!",
                    },
                  })}
                  type="text"
                  placeholder="last name"
                  className="flex flex-col py-4 px-3 border-[1px] rounded focus:outline-none w-full"
                />
                <p className="text-left font-medium text-[12px] ml-3 text-red-500">
                  {errors.lname?.message}
                </p>
              </div>
            </div>
            <div className="flex-1 w-full">
              <input
                {...register("email", {
                  required: { value: true, message: "Email Is Required!" },
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Input Pattern!",
                  },
                })}
                type="email"
                placeholder="email id"
                className=" w-full flex flex-col py-4 px-3 border-[1px] rounded focus:outline-none flex-1"
              />
              <p className="text-left font-medium text-[12px] ml-3 text-red-500">
                {errors.email?.message}
              </p>
            </div>
            <div className="flex-1 w-full">
              <textarea
                {...register("comments", {
                  required: { value: true, message: "Comments Is Required!" },
                })}
                type="text"
                placeholder="comments or questions"
                className="w-full flex flex-col h-40 py-4 px-3 border-[1px] rounded focus:outline-none flex-1"
              />
              <p className="text-left font-medium text-[12px] ml-3 text-red-500">
                {errors.comments?.message}
              </p>
            </div>
            <Button text={"Submit"} bg={"bg-[#4A60A1]"} color={"text-[#fff]"} />
            <Toaster position="bottom-center" reverseOrder={false} />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs