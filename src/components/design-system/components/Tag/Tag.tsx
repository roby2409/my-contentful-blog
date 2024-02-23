interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <div
      title={title}
      className={`text-gray-100 bg-teal-600 w-fit rounded-full p-1 px-3 text-sm font-bold`}
    >
      {title}
    </div>
  );
};

export default Tag;
