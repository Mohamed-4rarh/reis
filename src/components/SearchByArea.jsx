import HeadTitle from './HeadTitle'
import { cards } from '../constants'

const SearchByArea = () => {
  return (
    <section className='px-[50px] py-[55px]'>
      <div className='py-5'>
        <HeadTitle hText={'Property By Area'} h={'text-[#1E2640]'} p={'text-[#889099]'} />
        <div className='max-w-[1300px] mx-auto mt-[50px] gap-6 flex-col'>
          <div className='flex gap-6 overflow-hidden'>
            {
              cards.map((card, index) => (
                index <=2 && 
                <div className='card-area-img relative cursor-pointer' key={index}>
                  <div>
                    <img className='rounded-lg' src={card.img} alt="card" />
                    <div className='info absolute'>
                      <p className='text-[#ffffff] text-xl'>{card.title}</p>
                      <span className='text-[#ffffff] text-base font-normal'>{card.listing}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div className='flex gap-6 mt-6 overflow-hidden'>
            {
              cards.map((card, index) => (
                index > 2 && 
                <div className='card-area-img relative cursor-pointer' key={index}>
                  <div>
                    <img className='rounded-lg' src={card.img} alt="card" />
                    <div className='info absolute'>
                      <p className='text-[#ffffff] text-xl '>{card.title}</p>
                      <span className='text-[#ffffff] text-base font-normal'>{card.listing}</span>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchByArea