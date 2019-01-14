import { h, FunctionalComponent } from 'preact';
import { FeatherProps } from '../types';

export const Meh: FunctionalComponent<FeatherProps> = (props: any) => {
  const color = props.color || 'currentColor';
  const size = props.size || 24;
  delete props.color;
  delete props.size;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke={color}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="8" y1="15" x2="16" y2="15" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
};
