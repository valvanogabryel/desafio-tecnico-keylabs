import { ComponentProps } from 'react';

export function Input(props: ComponentProps<'input'>) {
  return (
    <input
      className="bg-transparent border-2 border-keyslab-gray rounded-xl p-4 pl-14 w-full transition-all focus:border-keyslab-blue focus:border-opacity-40 outline-none ring-opacity-10 focus:ring-4 ring-keyslab-blue placeholder:text-keyslab-light-gray placeholder:text-base"
      required
      {...props}
    />
  );
}
