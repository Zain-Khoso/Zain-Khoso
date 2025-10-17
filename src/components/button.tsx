// Lib Imports.
import Link from 'next/link';

// Utils.
import { cn } from '@/utils';

// Types.
import { IconType } from 'react-icons';
import { ClassNameValue } from 'tailwind-merge';

type CustomProps = {
  variant?: 'default' | 'icon';
  icon?: IconType;
};
type ButtonProps = React.ComponentProps<'button'> & CustomProps;
type LinkProps = React.ComponentProps<'a'> &
  CustomProps & {
    href: string;
    iconClassName?: ClassNameValue;
  };

// Button component for the entire app.
export function Button({
  children,
  variant = 'default',
  className,
  icon: Icon,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'group flex w-fit cursor-pointer items-center justify-center gap-4 rounded-full font-bold uppercase transition-all duration-300',
        variant === 'default' && 'bg-primary text-primary-dark px-6 py-4',
        variant === 'icon' && 'bg-primary/15 text-primary-dark aspect-square p-4',
        className
      )}
      {...props}
    >
      {variant === 'default' ? (
        <>
          {children}{' '}
          {Icon && (
            <div className="bg-primary-dark aspect-square rounded-full p-1 transition-all duration-300">
              <Icon className="fill-primary-light h-0 w-0 transition-all duration-300 group-hover:h-4 group-hover:w-4" />
            </div>
          )}
        </>
      ) : (
        Icon && <Icon size={24} className="fill-primary" />
      )}
    </button>
  );
}

// Button component for the entire app - Link Edition.
export function ButtonLink({
  children,
  variant = 'default',
  className,
  icon: Icon,
  iconClassName,
  ...props
}: LinkProps) {
  return (
    <Link
      className={cn(
        'group flex w-fit cursor-pointer items-center justify-center gap-4 rounded-full font-bold uppercase transition-all duration-300',
        variant === 'default' && 'bg-primary text-primary-dark px-6 py-4',
        variant === 'icon' && 'bg-primary/15 text-primary-dark aspect-square p-4',
        className
      )}
      {...props}
    >
      {variant === 'default' ? (
        <>
          {children}{' '}
          {Icon && (
            <div className="bg-primary-dark aspect-square rounded-full p-1 transition-all duration-300">
              <Icon className="fill-primary-light h-0 w-0 transition-all duration-300 group-hover:h-4 group-hover:w-4" />
            </div>
          )}
        </>
      ) : (
        Icon && <Icon size={24} className={cn('fill-primary', iconClassName)} />
      )}
    </Link>
  );
}
