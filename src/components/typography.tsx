// Utils.
import { cn } from '@/utils';

// Types.
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

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
