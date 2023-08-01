import HeadTitle from "../components/HeadTitle";
import GalleryHits from "../components/GalleryHits";

const Gallery = () => {
  return (
    <section className="py-[50px] px-5 bg-[#EDEFF6]">
      <HeadTitle hText='gallery' h={'text-[#1E2640]'} p={'text-[#889099] max-w-[470px]'} />
      <div className="mt-[50px]">
        <GalleryHits hasPaginate={true} hitsPerPage={5} />
      </div>
    </section>
  );
};

export default Gallery;
