import cn from 'classnames';
export interface TextProps {
  children: React.ReactNode;
  style?: React.CSSProperties | undefined;
  className?: string;
}

const Span: React.FC<TextProps> = ({ children, style, className }) => {
  return (
    <span
      className={cn('text-gray-600 dark:text-gray-300 sm:text-md text-sm', className)}
      style={style}
    >
      {children}
    </span>
  );
};

export default Span;
