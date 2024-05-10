const ButtonPrimary = ({ children, ...props }) => {
  return (
    <button {...props} className="w-full flex items-center justify-center gap-2 rounded-full bg-primaryColor text-lg font-medium  px-4 py-2 text-white">
      {children}
    </button>
  );
};

export default ButtonPrimary;
