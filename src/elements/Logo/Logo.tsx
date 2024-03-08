// import { Color } from '@ui/core/types/color';
import { SVGProps } from 'react';
import { Logos, LogoKey } from './Logos';

export interface IconProps extends SVGProps<SVGSVGElement> {
  logoKey: LogoKey;
  size?: number;
}

const Logo = ({ logoKey, size = 30, ...props }: IconProps) => {
  const LogoComponent = Logos[logoKey];

  // if no Logo Key return nothing
  if (!LogoComponent) {
    return null;
  }

  return (
    <LogoComponent
      fill="currentColor"
      height={size}
      {...props}
    />
  );
};

export default Logo;