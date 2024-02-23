interface BorderProps {
  children?: React.ReactNode;
}

const Border: React.FC<BorderProps> = ({ children }) => {
  return (
    <div className="border-teal-100 dark:border-teal-900 flex w-fit rounded-full border duration-300">
      {children}
    </div>
  );
};

export default Border;
