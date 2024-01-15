import { ComponentProps } from 'react';
import keySlabLogo from '../../assets/sidebar/Logo.svg';

export function Logo(props: ComponentProps<'img'>) {
  return <img src={keySlabLogo} alt="Logo da KeySlab" {...props} />;
}
