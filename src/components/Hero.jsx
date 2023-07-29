import Button from "./Button"
import HeadTitle from "./HeadTitle"
import SearchFilter from "./SearchFilter"

const Hero = () => {
  return (
    <div className="hero">
      <div className='py-[120px] px-[30px] relative'>
        <HeadTitle h={'text-white'} p={'text-[#EDEFF6]'} hText={'Find Your Dream Home'} />
        <div className='mt-16'>
          <div className='flex flex-1 justify-center gap-4'>
            <Button text={'Rent'} bg={'bg-[#4a60a1]'} color={'text-[#ffffff]'}/>
            <Button text={'Sale'} bg={'bg-[#ffffff]'} color={'text-[#4a60a1]'}/>
          </div>
          <div>
            <SearchFilter />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero