import { locationCards } from '../constants'

const LocationPropertiesCard = () => {
  return (
    <div className='flex gap-[30px] px-5 justify-center flex-wrap'>
      {
        //card sample
        locationCards.map((card, index) => (
          <div className='relative cursor-pointer card__location rounded-md w-[312px] max-w-[320px] min-w-[285px] flex flex-col gap-5' key={index}>
            <img className=' rounded-lg' src={card.img} alt="card" />
            <div className=' w-full flex items-center justify-center gap-8 absolute bottom-6'>
              <div className='flex items-center gap-2'>
                <img src={card.mapPin} alt="location" />
                <span className=' text-base text-[#fff]'>{card.location}</span>
              </div>
              <div className='flex items-center gap-2'>
                <img src={card.areaImg} alt="area" />
                <span className=' text-base text-[#fff]'>{card.area}</span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LocationPropertiesCard