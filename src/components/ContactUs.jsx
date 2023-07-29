import HeadTitle from './HeadTitle'
import Button from './Button'

const ContactUs = () => {
  return (
    <section className='bg-[#EDEFF6] py-[85px] px-3'>
      <div className='flex flex-col gap-11 max-w-[900px] mx-auto'>
        <HeadTitle hText={'Contact Us'} h={'text-[#1E2640]'} p={'text-[#889099] max-w-[470px]'} />
        <div className='p-[30px] bg-[#fff] rounded-xl shadow-lg shadow-[#3b4d8114] flex flex-col gap-5 items-center'>
          <div className='w-full'>
            <h3 className='capitalize font-bold text-[24px] text-[#434343]'>Enquiry Form</h3>
            <p className='text-[#576074] font-normal text-base'>Are you looking for details about a certain property? Ask us a question using the form below.</p>
          </div>
          <div className='flex gap-3 items-start justify-center w-full'>
            <input type="text" placeholder='first name' className='flex flex-col capitalize py-4 px-3 border-[1px] rounded focus:outline-none flex-1' />
            <input type="text" placeholder='last name' className='flex flex-col capitalize py-4 px-3 border-[1px] rounded focus:outline-none flex-1' />
          </div>
          <input type="text" placeholder='email id' className=' w-full flex flex-col capitalize py-4 px-3 border-[1px] rounded focus:outline-none flex-1' />
          <textarea type="text" placeholder='comments or questions' className='w-full flex flex-col h-40 capitalize py-4 px-3 border-[1px] rounded focus:outline-none flex-1' />
          <Button text={'Submit'} bg={'bg-[#4A60A1]'} color={'text-[#fff]'} />
        </div>
      </div>
    </section>
  )
}

export default ContactUs