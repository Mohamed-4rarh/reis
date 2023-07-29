import Button from './Button'
import HeadTitle from './HeadTitle'
import LocationPropertiesCard from './LocationPropertiesCard'

const SearchByLocation = () => {
  return (
    <section className=' py-[85px]'>
      <div className='flex flex-col gap-11 items-center'>
        <HeadTitle hText={'Properties by Location'} h={'text-[#1E2640]'} p={'max-w-[470px] text-[#889099]'} />
        <LocationPropertiesCard />
        <Button text={'load more listing'} bg={'bg-[#4A60A1]'} color={'text-[#fff]'} />
      </div>
    </section>
  )
}

export default SearchByLocation