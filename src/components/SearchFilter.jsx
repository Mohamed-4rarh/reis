import { useState } from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom';

const SearchFilter = () => {

    const [purpose, setPurpose] = useState('for-rent'); //to control purpose selection value
    const [frequency, setFrequency] = useState('monthly'); //to control frequency selection value
    const [lang, setLang] = useState('en'); //to control language selection value
    const navigate = useNavigate(); //to navigate the link, import useNave in value named navigate

    const handleSearch = () => {
        navigate({
            pathname: '/properties',
            search: `?purpose=${purpose}&frequency=${frequency}&lang=${lang}`
        })
        
    }
    return (
        <div className='bg-[#ffffff] py-8 px-14 mt-6 mx-auto max-w-[1350px] justify-between gap-5 flex lg:flex-row flex-col flex-1 rounded-md'>
            <div className='flex flex-col sm:flex-row lg:flex-col lg:items-start'>
                <h4 className='flex-1 font-semibold text-lg text-[#2C3A61] mb-2'>Purpose</h4>
                <div>
                    <label className='text-[#889099]' htmlFor="purpose">Property Type</label>
                    <select onChange={(e) => setPurpose(e.target.value)} className='bg-white cursor-pointer text-[#4A60A1]' name="purpose" id="purpose__selection">
                        <option value="for-rent">For Rent</option>
                        <option value="for-sale">For Sale</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row lg:flex-col lg:items-start'>
                <h4 className='flex-1 font-semibold text-lg text-[#2C3A61] mb-2'>Frequency</h4>
                <div>
                    <label className='text-[#889099]' htmlFor="frequency">Rent Frequency</label>
                    <select onChange={(e) => setFrequency(e.target.value)} className='bg-white cursor-pointer text-[#4A60A1]' name="frequency" id="frequency__selection">
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                        <option value="weekly">Weekly</option>
                        <option value="daily">Daily</option>
                    </select>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row lg:flex-col lg:items-start'>
                <h4 className='flex-1 font-semibold text-lg text-[#2C3A61] mb-2'>Language</h4>
                <div>
                    <label className='text-[#889099]' htmlFor="lang">Set Language</label>
                    <select onChange={(e) => setLang(e.target.value)} className='bg-white cursor-pointer text-[#4A60A1]' name="lang" id="lang__selection">
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                    </select>
                </div>
            </div>
            <Button onClick={handleSearch} text={'Search'} bg={'bg-[#4a60a1]'} color={'text-[#ffffff]'}/>
        </div>
    )
}

export default SearchFilter