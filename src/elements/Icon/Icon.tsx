import { SVGProps } from 'react';

import { Icons, IconKey } from './Icons';

export interface IconProps extends SVGProps<SVGSVGElement> {
  iconKey: IconKey;
  size?: number;
}

const Icon = ({ iconKey, size = 100, ...props }: IconProps) => {
  const IconComponent = Icons[iconKey];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconComponent
      fill="currentColor"
      height={size}
      width={size}
      {...props}
    />
  );
};

export default Icon;