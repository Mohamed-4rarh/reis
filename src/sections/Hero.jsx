import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import HeadTitle from "../components/HeadTitle"
import SearchFilter from "../components/SearchFilter"

const Hero = () => {
  const navigate = useNavigate();
  const handleSale = () => {
    navigate({
      pathname: '/properties',
      search: '?purpose=for-sale'
    })
  }
  return (
    <div className="hero">
      <div className='py-[120px] px-[30px] relative'>
        <HeadTitle h={'text-white'} p={'text-[#EDEFF6]'} hText={'Find Your Dream Home'} />
        <div className='mt-16'>
          <div className='flex flex-1 justify-center gap-4'>
            <Link to={'properties'}>
              <Button text={'Rent'} bg={'bg-[#4a60a1]'} color={'text-[#ffffff]'}/>
            </Link>
            <Button onClick={handleSale} text={'Sale'} bg={'bg-[#ffffff]'} color={'text-[#4a60a1]'}/>
          </div>
            <SearchFilter />
        </div>
      </div>
    </div>
  )
}

export default Hero