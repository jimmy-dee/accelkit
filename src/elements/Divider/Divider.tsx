import { SVGProps } from 'react';

import { Dividers, DividerKey } from './Dividers';

export interface IconProps extends SVGProps<SVGSVGElement> {
  dividerKey: DividerKey;
  size?: number;
}

const Divider = ({ dividerKey, size = 150, ...props }: IconProps) => {
  const DividerComponent = Dividers[dividerKey];

  // if no Logo Key return nothing
  if (!DividerComponent) {
    return null;
  }

  return (
    <DividerComponent
      fill="currentColor"
      height={size}
      {...props}
    />
  );
};

export default Divider;