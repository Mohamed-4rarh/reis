import { useState } from 'react';
import Button from './Button';
import { useSearchParams } from 'react-router-dom';

const PropertiesFilter = () => {
  const [purpose, setPurpose] = useState("for-rent");
  const [frequency, setFrequency] = useState("monthly");
  const [lang, setLang] = useState("en");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleFilter = () => {
    setSearchParams({purpose: purpose, frequency: frequency, lang: lang})
  }
  return (
    <div className="py-[30px] bg-[#EDEFF6]">
      <div className="flex flex-wrap justify-center sm:gap-6 gap-2 items-center">
        <div className="flex gap-1">
          <label
            className="text-[#6d737a] font-semibold hidden sm:block"
            htmlFor="purpose"
          >
            Purpose
          </label>
          <select
            onChange={(e) => setPurpose(e.target.value)}
            className="bg-[#edeff6] cursor-pointer text-[#4A60A1]"
            name="purpose"
            id="purpose__selection"
          >
            <option value="for-rent" selected={searchParams.get('purpose') == 'for-rent' ? true : false} >For Rent</option>
            <option value="for-sale" selected={searchParams.get('purpose') == 'for-sale' ? true : false} >For Sale</option>
          </select>
        </div>
        <div className="flex gap-1">
          <label
            className="text-[#6d737a] font-semibold hidden sm:block"
            htmlFor="purpose"
          >
            Purpose
          </label>
          <select
            onChange={(e) => setFrequency(e.target.value)}
            className="bg-[#edeff6] cursor-pointer text-[#4A60A1]"
            name="frequency"
            id="frequency__selection"
          >
            <option value="monthly" selected={searchParams.get('frequency') == 'monthly' ? true : false} >Monthly</option>
            <option value="yearly" selected={searchParams.get('frequency') == 'yearly' ? true : false} >Yearly</option>
            <option value="weekly" selected={searchParams.get('frequency') == 'weekly' ? true : false} >Weekly</option>
            <option value="daily" selected={searchParams.get('frequency') == 'daily' ? true : false} >Daily</option>
          </select>
        </div>
        <div className="flex gap-1">
          <label
            className="text-[#6d737a] font-semibold hidden sm:block"
            htmlFor="purpose"
          >
            Purpose
          </label>
          <select
            onChange={(e) => setLang(e.target.value)}
            className="bg-[#edeff6] cursor-pointer text-[#4A60A1]"
            name="lang"
            id="lang__selection"
          > 
            <option value={"en"} className=' capitalize' selected={searchParams.get('lang') == 'en' ? true : false} >English</option>
            <option value="ar" selected={searchParams.get('lang') == 'ar' ? true : false} >Arabic</option>
          </select>
        </div>
        <Button
          onClick={handleFilter}
          text="filter"
          bg={"bg-[#4a60a1]"}
          color={"text-[#fff]"}
        />
      </div>
    </div>
  );
}

export default PropertiesFilter