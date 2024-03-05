import { HTMLProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const Container = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return <div className={twMerge('max-w-8xl mx-auto ', className)} {...props} />;
};
