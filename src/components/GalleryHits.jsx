import { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import { useFetch } from '../hooks/useFetch'

// eslint-disable-next-line react/prop-types
const GalleryHits = ({hasPaginate, hitsPerPage}) => {
    const [page, setPage] = useState(0)
    const [galleryHits, setGalleryHits] = useState([])
    useEffect(() => {
    const apiParams = {
      locationExternalIDs: "5002,6020",
      purpose: 'for-rent',
      hitsPerPage: hitsPerPage || 25,
      page: page || 0,
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
  }, [hitsPerPage, page])
  const handlePaginate = (data) => {
    setPage(data.selected)
  }
  return (
    <div>
      <div className="flex gap-10 flex-wrap justify-center">
        {
          galleryHits.map((hit) => (
            <div key={hit.id} className='cursor-pointer hover:border-[#4A60A1] p-1 rounded-lg border-[#889099] border-[1px]'>
              <img className=" rounded-md w-[324px] h-[200px]" src={hit.coverPhoto.url} alt="photo" />
            </div>
          ))
        }
      </div>
      {hasPaginate && 
        (
          <ReactPaginate
            className='flex justify-center gap-5 mt-[80px]'
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={hitsPerPage}
            onPageChange={handlePaginate}
            previousClassName="bg-[#EDEFF6] text-[#6D737A] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
            nextClassName="bg-[#4A60A1] text-[#fff] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
            activeClassName="bg-[#4A60A1] text-[#fff] "
            pageClassName="font-semibold text-[#4A60A1] w-[40px] h-[40px] flex items-center justify-center rounded-[4px]"
          />
        )
      }
    </div>
  )
}

export default GalleryHits