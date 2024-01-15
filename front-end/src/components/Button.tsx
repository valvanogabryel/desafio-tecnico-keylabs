import { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export function Button({ children, ...props }: Readonly<ButtonProps>) {
  return (
    <button
      className="bg-keyslab-blue rounded-full transition-all p-4 text-keyslab-black text-sm font-semibold hover:bg-keyslab-blue-hover"
      {...props}
    >
      {children}
    </button>
  );
}
