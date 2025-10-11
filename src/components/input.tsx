'use client';

// Utils.
import { useRef, useLayoutEffect } from 'react';
import { cn } from '@/utils';
import { useContactForm, type FormID } from '@/utils/contactForm';

// Components.
import { Small } from './typography';

// Types.
type CustomProps = {
  id: string;
  name: string;
  label: string;
};
type InputProps = React.ComponentProps<'input'> & CustomProps;
type SelectProps = React.ComponentProps<'select'> & CustomProps;
type TextareaProps = React.ComponentProps<'textarea'> & CustomProps;

export function Input({ id, label, name, className, ...props }: InputProps) {
  const elem = useRef<null | HTMLInputElement>(null);
  const errors = useContactForm((store) => store.error);

  const isInvalid = errors !== null ? errors[id as FormID] : false;

  useLayoutEffect(() => {
    if (isInvalid) elem.current?.focus();

    return () => {
      elem.current?.blur();
    };
  }, [isInvalid]);

  return (
    <label className="flex cursor-text flex-col gap-2">
      <label htmlFor={id} className="text-primary cursor-text font-semibold">
        {label}
      </label>

      <input
        id={id}
        ref={elem}
        name={name}
        className={cn(
          className,
          'bg-secondary-dark text-primary-light outline-primary flex w-full min-w-0 cursor-text rounded-md px-4 py-2 text-base shadow-none disabled:pointer-events-none',
          isInvalid ? 'outline outline-rose-500' : 'outline-primary focus:outline'
        )}
        {...props}
      />

      {isInvalid && <Small className="text-rose-500">{isInvalid}</Small>}
    </label>
  );
}

export function Select({ id, label, name, className, children, ...props }: SelectProps) {
  const elem = useRef<null | HTMLSelectElement>(null);
  const errors = useContactForm((store) => store.error);

  const isInvalid = errors !== null ? errors['subject'] : false;

  useLayoutEffect(() => {
    if (isInvalid) elem.current?.focus();

    return () => {
      elem.current?.blur();
    };
  }, [isInvalid]);

  return (
    <label className="flex cursor-pointer flex-col gap-2">
      <label htmlFor={id} className="text-primary cursor-pointer font-semibold">
        {label}
      </label>

      <select
        id={id}
        ref={elem}
        name={name}
        className={cn(
          className,
          'bg-secondary-dark text-primary-light flex w-full min-w-0 cursor-pointer rounded-md px-4 py-2 text-base shadow-none disabled:pointer-events-none',
          isInvalid ? 'outline outline-rose-500' : 'outline-primary focus:outline'
        )}
        {...props}
      >
        {children}
      </select>

      {isInvalid && <Small className="text-rose-500">{isInvalid}</Small>}
    </label>
  );
}

export function Textarea({ id, label, name, className, ...props }: TextareaProps) {
  const elem = useRef<null | HTMLTextAreaElement>(null);
  const errors = useContactForm((store) => store.error);

  const isInvalid = errors !== null ? errors[id as FormID] : false;

  useLayoutEffect(() => {
    if (isInvalid) elem.current?.focus();

    return () => {
      elem.current?.blur();
    };
  }, [isInvalid]);

  return (
    <label className="flex cursor-text flex-col gap-2">
      <label htmlFor={id} className="text-primary cursor-text font-semibold">
        {label}
      </label>

      <textarea
        id={id}
        ref={elem}
        name={name}
        rows={6}
        className={cn(
          className,
          'bg-secondary-dark text-primary-light outline-primary flex w-full min-w-0 cursor-text resize-none rounded-md p-4 text-justify text-base shadow-none disabled:pointer-events-none',
          isInvalid ? 'outline outline-rose-500' : 'outline-primary focus:outline'
        )}
        {...props}
      ></textarea>

      {isInvalid && <Small className="text-rose-500">{isInvalid}</Small>}
    </label>
  );
}
