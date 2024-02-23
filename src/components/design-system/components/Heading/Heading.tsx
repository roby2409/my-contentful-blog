export interface HeadingProps {
  children?: React.ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string | undefined;
  variant?: 'h1' | 'h2' | 'h3';
  size?: string;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  children,
  style,
  variant = 'h1',
  size = 'text-2xl',
}) => {
  const HeadingTag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : 'h3';

  return (
    <HeadingTag className={`dark:text-gray-100 my-2 font-bold ${size} ${className}`} style={style}>
      {children}
    </HeadingTag>
  );
};

export default Heading;
