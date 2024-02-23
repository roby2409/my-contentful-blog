interface RoundedButtonBoxProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode | undefined;
  title?: string | undefined;
}

const RoundedButtonBox: React.FC<RoundedButtonBoxProps> = ({ onClick, children, title }) => {
  return (
    <button
      className={`ring-teal-400 bg-gray-200 text-gray-800 hover:bg-gray-200 hover:translate-y-1rounded-lg dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-gray-100
      dark:ring-offset-black ml-auto flex h-9 w-9 items-center justify-center
    rounded-lg outline-none duration-300 focus:ring-4 focus:ring-offset-2`}
      onClick={onClick}
      title={title}
    >
      {children}
    </button>
  );
};

export default RoundedButtonBox;
