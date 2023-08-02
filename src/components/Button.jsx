// eslint-disable-next-line react/prop-types
const Button = ({ text, bg, color, onClick }) => {
  return (
    <button onClick={onClick}
      className={`${bg} ${color} py-3 px-6 rounded-md text-base font-normal capitalize`}
    >
      {text}
    </button>
  );
};

export default Button;
