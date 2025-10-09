// Utils.
import { cn } from '@/utils';

// Types.
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

export default function H2({ children, className, ...props }: HeadingProps) {
  return (
    <h2 className={cn('font-heading text-[28px]', className)} {...props}>
      {children}
    </h2>
  );
}
