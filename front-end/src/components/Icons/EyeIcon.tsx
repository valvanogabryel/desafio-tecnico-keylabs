import { ComponentProps } from 'react';
import eyeIcon from '../../assets/main/form-icons/tabler_eye.svg';

export function EyeIcon(props: ComponentProps<'img'>) {
  return <img src={eyeIcon} alt="" aria-hidden {...props} />;
}
