import type { SVGProps } from "react";
const SvgRingCross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <path
      d="M50 100C22.593 100 0 77.407 0 50S22.593 0 50 0s50 22.593 50 50-22.593 50-50 50m0-85.556C30.37 14.444 14.444 30.37 14.444 50S30.37 85.556 50 85.556 85.556 69.63 85.556 50 69.63 14.444 50 14.444M42.892 50 32.648 60.521a5.095 5.095 0 0 0 .096 7.202 5.094 5.094 0 0 0 7.201-.096L50 57.3l10.055 10.327a5.094 5.094 0 0 0 7.201.096 5.095 5.095 0 0 0 .096-7.202L57.108 50l10.244-10.521a5.095 5.095 0 0 0-.096-7.202 5.094 5.094 0 0 0-7.201.096L50 42.7 39.945 32.373a5.094 5.094 0 0 0-7.201-.096 5.095 5.095 0 0 0-.096 7.202z"
      style={{
        fillRule: "nonzero",
      }}
    />
  </svg>
);
export default SvgRingCross;
