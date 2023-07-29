// eslint-disable-next-line react/prop-types
const HeadTitle = ({ h, p, hText }) => {
  return (
    <div className="text-center">
      <h2 className={`font-semibold text-[50px] capitalize ${h}`}>{hText}</h2>
      <p className={`${p} font-normal text-[16px] m-auto`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae placeat
        possimus minus maxime ullam distinctio optio totam nemo rem accusantium.
      </p>
    </div>
  );
};

export default HeadTitle;
