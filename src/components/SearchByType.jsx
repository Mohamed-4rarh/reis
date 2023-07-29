import HeadTitle from './HeadTitle'
import { types } from '../constants'

const SearchByType = () => {
  return (
    <section className='py-[70px] bg-[#EDEFF6]'>
      <div className=' flex flex-col py-[70px] gap-[50px]'>
        <HeadTitle hText={'Properties by type'} h={'text-[#1E2640]'} p={'text-[#889099]'} />
        <div className='flex justify-center items-center gap-[85px]'>
          {
            types.map((service, index) => (
              <div className='px-6 py-6 bg-[#fff] rounded-md w-[312px] max-w-[340px] min-w-[300px] flex flex-col gap-6 items-start shadow-lg shadow-[#3b4d8114]' key={index}>
                <div>
                  <img src={service.img} alt="img" />
                </div>
                <h3 className='text-base font-semibold text-[#363A3D]'>{service.title}</h3>
                <p className=' font-normal text-base text-[#889099]'>{service.description}</p>
                <button className='text-[16px] text-[#4A60A1]'>Read more</button>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SearchByType