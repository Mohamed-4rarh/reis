
// eslint-disable-next-line react/prop-types
const Button = ({text, bg, color}) => {
  return (
    <button className={`${bg} ${color} py-3 px-6 rounded-md text-base font-normal`}>
        {text}
    </button>
  )
}

export default Button