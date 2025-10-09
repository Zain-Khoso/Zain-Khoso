// Lib Imports.
import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

// Utils.
import { cn } from '@/utils';

// Types.
import { IconType } from 'react-icons';

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;
type LinkProps = React.HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  icon?: IconType;
};

export function H1({ children, className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn('font-heading text-primary-light text-[57px] leading-14', className)}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn('font-heading text-primary-light text-[43px] leading-11', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HeadingProps) {
  return (
    <h3 className={cn('text-primary-light text-[24px] leading-8', className)} {...props}>
      {children}
    </h3>
  );
}

export function Big({ children, className, ...props }: HeadingProps) {
  return (
    <h2 className={cn('font-heading text-[28px]', className)} {...props}>
      {children}
    </h2>
  );
}

export function P({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn('text-justify leading-6', className)} {...props}>
      {children}
    </p>
  );
}

export function ThemedLink({ children, icon: Icon, className, ...props }: LinkProps) {
  return (
    <Link
      className={cn(
        'decoration-primary text-primary border-primary flex w-fit items-center gap-2 border-b font-bold uppercase',
        className
      )}
      {...props}
    >
      {children}

      {Icon && <Icon className="fill-primary" size={16} />}
    </Link>
  );
}
