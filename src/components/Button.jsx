const Button = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='bg-pink px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl text-white text-base sm:text-lg font-medium hover:bg-pink/90 hover:scale-105 transform transition duration-300 ease-in-out'
    >
      {children}
    </button>
  );
};

export default Button;
