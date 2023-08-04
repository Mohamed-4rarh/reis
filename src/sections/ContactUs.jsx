import HeadTitle from '../components/HeadTitle'
import Button from '../components/Button'
import { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast'

const ContactUs = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')

  const handleForm = () => {
    if(
      firstName.trim() == '' || 
      lastName.trim() == '' ||
      email.trim() == '' ||
      comments.trim() == ''
    ) {
      toast.error("This didn't work, All fields required!")
    }else {
      toast.success('Successfully Sent!')
      setFirstName('')
      setLastName('')
      setEmail('')
      setComments('')
    }
  }
  
  return (
    <section id='contact' className='bg-[#EDEFF6] py-[85px] px-3'>
      <div className='flex flex-col gap-10 max-w-[900px] mx-auto'>
        <HeadTitle hText={'Contact Us'} h={'text-[#1E2640]'} p={'text-[#889099] max-w-[470px]'} />
        <div className='p-[30px] bg-[#fff] rounded-xl shadow-lg shadow-[#3b4d8114] flex flex-col gap-5 items-center'>
          <div className='w-full'>
            <h3 className='capitalize font-bold text-[24px] text-[#434343]'>Enquiry Form</h3>
            <p className='text-[#576074] font-normal text-base'>Are you looking for details about a certain property? Ask us a question using the form below.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className='w-full flex flex-col items-center gap-3' action='' >
            <div className='flex flex-col sm:flex-row gap-3 items-start justify-center w-full'>
              <input onChange={(e) => setFirstName(e.target.value)} id='fname' type="text" placeholder='first name' className='flex flex-col capitalize py-4 px-3 border-[1px] rounded focus:outline-none w-full' />
              <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder='last name' className='flex flex-col capitalize py-4 px-3 border-[1px] rounded focus:outline-none w-full' />
            </div>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='email id' className=' w-full flex flex-col capitalize py-4 px-3 border-[1px] rounded focus:outline-none flex-1' />
            <textarea onChange={(e) => setComments(e.target.value)} type="text" placeholder='comments or questions' className='w-full flex flex-col h-40 capitalize py-4 px-3 border-[1px] rounded focus:outline-none flex-1' />
            <Button onClick={handleForm} text={'Submit'} bg={'bg-[#4A60A1]'} color={'text-[#fff]'} />
            <Toaster position='bottom-center' reverseOrder={false} />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs