import Button from './Button'

const SearchFilter = () => {
    return (
        <div className='bg-[#ffffff] py-8 px-14 mt-6 mx-auto max-w-[1400px] justify-between flex flex-1 rounded-md'>
            <div className='items-center'>
                <h4 className='flex-1 font-semibold text-lg text-[#2C3A61] mb-2'>Purpose</h4>
                <div>
                    <label className='text-[#889099]' htmlFor="city">Select Property Type</label>
                    <select className=' cursor-pointer text-[#4A60A1]' name="city" id="1">
                        <option value="for Rent">For Rent</option>
                        <option value="for Rent">For Sale</option>
                    </select>
                </div>
            </div>
            <div className='items-center'>
                <h4 className='flex-1 font-semibold text-lg text-[#2C3A61] mb-2'>Frequency</h4>
                <div>
                    <label className='text-[#889099]' htmlFor="city">Rent Frequency</label>
                    <select className=' cursor-pointer text-[#4A60A1]' name="city" id="1">
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>
            </div>
            <div className='items-center'>
                <h4 className='flex-1 font-semibold text-lg text-[#2C3A61] mb-2'>Language</h4>
                <div>
                    <label className='text-[#889099]' htmlFor="city">Select Your Language</label>
                    <select className=' cursor-pointer text-[#4A60A1]' name="city" id="1">
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </div>
            </div>
            <Button text={'Search'} bg={'bg-[#4a60a1]'} color={'text-[#ffffff]'}/>
        </div>
    )
}

export default SearchFilter