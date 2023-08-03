import { Link } from 'react-router-dom'
import Button from '../components/Button'
import HeadTitle from '../components/HeadTitle'
import LocationPropertiesCard from '../components/LocationPropertiesCard'

const SearchByLocation = () => {
  return (
    <section className='px-[20px] py-[85px]'>
      <div className='flex flex-col gap-11 items-center'>
        <HeadTitle hText={'Properties by Location'} h={'text-[#1E2640]'} p={'max-w-[470px] text-[#889099]'} />
        <LocationPropertiesCard />
        <Link to={'properties'}>
          <Button text={'load more listing'} bg={'bg-[#4A60A1]'} color={'text-[#fff]'} />
        </Link>
        
      </div>
    </section>
  )
}

export default SearchByLocation