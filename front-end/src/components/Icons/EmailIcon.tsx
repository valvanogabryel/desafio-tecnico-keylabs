import { ComponentProps } from 'react';
import mailIcon from '../../assets/main/form-icons/tabler_mail.svg';

export function EmailIcon(props: ComponentProps<'img'>) {
  return <img src={mailIcon} alt="" aria-hidden {...props} />;
}
