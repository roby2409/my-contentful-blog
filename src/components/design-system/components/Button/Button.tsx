const Button: React.FC = (
  props: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) => {
  return (
    <button
      className={`text-gray-800 dark:text-gray-100 dark:ring-offset-black bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-900
      ring-teal-400 flex w-fit items-center justify-center rounded-lg p-2
      px-6 font-semibold outline-none duration-300 focus:ring-4 focus:ring-offset-2`}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
