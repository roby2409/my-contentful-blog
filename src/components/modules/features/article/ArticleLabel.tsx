import { HTMLProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ArticleLabelProps extends HTMLProps<HTMLSpanElement> {
  children: ReactNode;
}

export const ArticleLabel = ({ children, className, ...props }: ArticleLabelProps) => {
  return (
    <span
      className={twMerge(
        'bg-purple200 text-2xs text-purple600 rounded px-2 py-1 font-semibold uppercase leading-none tracking-widest',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
