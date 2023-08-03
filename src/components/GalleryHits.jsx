import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import Button from './Button'
import Loader from './Loader';
import { dLoadingGif } from '../assets';

// eslint-disable-next-line react/prop-types
const GalleryHits = () => {
  const [loading, setLoading] = useState(true);
    const [galleryHits, setGalleryHits] = useState([])
    const [hits, setHits] = useState([])
    const [imgs, setImgs] = useState(5)
    const [page, setPage] = useState(0)
    useEffect(() => {
    const apiParams = {
      locationExternalIDs: "5002,6020",
      purpose: 'for-rent',
      hitsPerPage: 25,
      page: page,
      lang: 'en',
      sort: "city-level-score",
      rentFrequency: 'monthly',
      categoryExternalID: "4",
    }
    const GetData = async () => {
      const response = await useFetch("https://bayut.p.rapidapi.com/properties/list",apiParams)
      setGalleryHits(response.hits)
      setImgs(5)
      setLoading(false)
    }
    GetData();
  }, [page])

  useEffect(() => {
    const slicedHits = galleryHits.slice(0, imgs);
    setHits(slicedHits);
  }, [imgs, galleryHits])

  if(imgs == 30) {
    setHits([])
    setImgs(0)
    setPage(page + 1);
    setLoading(true)
  }

  const handleImg = () => {
    setImgs(prev => prev + 5)
  }

  return (
    <div className='flex flex-col gap-[100px] items-center'>
      {loading && <Loader loadingGif={dLoadingGif} /> }
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