
// eslint-disable-next-line react/prop-types
const Loader = ({loadingGif}) => {
  return (
    <div className='flex flex-col justify-center p-[85px]'>
      <div className='flex flex-col text-center gap-4 justify-center'>
        <img className='w-[200px]' src={loadingGif} alt="loading" />
      </div>
    </div>
  )
}

export default Loader