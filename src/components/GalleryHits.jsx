import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import Button from './Button'

// eslint-disable-next-line react/prop-types
const GalleryHits = () => {
    const [galleryHits, setGalleryHits] = useState([])
    const [hits, setHits] = useState([])
    const [imgs, setImgs] = useState(5)
    useEffect(() => {
    const apiParams = {
      locationExternalIDs: "5002,6020",
      purpose: 'for-rent',
      hitsPerPage: 25,
      page: 0,
      lang: 'en',
      sort: "city-level-score",
      rentFrequency: 'monthly',
      categoryExternalID: "4",
    }
    const GetData = async () => {
      const response = await useFetch("https://bayut.p.rapidapi.com/properties/list",apiParams)
      setGalleryHits(response.hits)
    }
    GetData();
  }, [])

  useEffect(() => {
    const slicedHits = galleryHits.slice(0, imgs);
    setHits(slicedHits)
  }, [imgs, galleryHits])

  const handleImg = () => {
    setImgs(prev => prev + 5)
  }

  return (
    <div className='flex flex-col gap-[100px] items-center'>
      <div className="flex gap-10 flex-wrap justify-center">
        {
          hits.map((hit) => (
            <div key={hit.id} className='cursor-pointer hover:border-[#4A60A1] p-1 rounded-lg border-[#889099] border-[1px]'>
              <img className=" rounded-md w-[324px] h-[200px]" src={hit.coverPhoto.url} alt="photo" />
            </div>
          ))
        }
      </div>
      <Button onClick={handleImg} text='load more!...' color={'text-[#fff]'} bg={'bg-[#4a60a1]'} />
    </div>
  )
}

export default GalleryHits