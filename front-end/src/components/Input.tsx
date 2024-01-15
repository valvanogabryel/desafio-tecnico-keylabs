import { ComponentProps, ElementType, useState } from 'react';
import { EyeIcon } from './Icons/EyeIcon';

interface InputProps extends ComponentProps<'input'> {
  Icon: ElementType;
  hasTogglePassword?: boolean;
}

export function Input({
  Icon,
  hasTogglePassword = false,
  ...props
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center relative text-light-gray group">
      <Icon className="absolute p-4 left-0 pointer-events-none" />
      <input
        className="bg-transparent border-2 border-keyslab-gray rounded-xl p-4 pl-14 w-full transition-all focus:border-keyslab-blue focus:border-opacity-40 outline-none ring-opacity-10 focus:ring-4 ring-keyslab-blue placeholder:text-keyslab-light-gray placeholder:text-base hover:border-gray-600"
        {...props}
        autoComplete="off"
        type={showPassword ? 'text' : props.type}
      />

      {hasTogglePassword && (
        <button
          type="button"
          className="absolute right-0 pr-4"
          onClick={() => setShowPassword(!showPassword)}
        >
          <EyeIcon
            className={`transition-all hover:scale-105 ${
              showPassword && 'invert scale-110'
            }`}
          />
        </button>
      )}
    </div>
  );
}
