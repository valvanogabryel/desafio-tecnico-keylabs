import { ComponentProps } from 'react';
import passwordIcon from '../../assets/main/form-icons/tabler_lock.svg';

export function PasswordIcon(props: ComponentProps<'img'>) {
  return <img src={passwordIcon} alt="" aria-hidden {...props} />;
}
