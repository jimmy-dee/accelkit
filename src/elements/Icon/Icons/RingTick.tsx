import type { SVGProps } from "react";
const SvgRingTick = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M50.007 100C22.433 100 0 77.57 0 50S22.433 0 50.007 0C77.574 0 100 22.43 100 50s-22.426 50-49.993 50m0-85.714c-19.697 0-35.721 16.02-35.721 35.714S30.31 85.714 50.007 85.714c19.69 0 35.707-16.02 35.707-35.714S69.697 14.286 50.007 14.286m-7.659 57.143a4.84 4.84 0 0 1-3.47-1.477L25.231 55.804c-1.895-1.946-1.895-5.122 0-7.072a4.8 4.8 0 0 1 3.469-1.481c1.309 0 2.544.524 3.474 1.473l10.24 10.573 23.881-24.529c1.86-1.911 5.079-1.915 6.943 0 1.844 1.981 1.817 5.149-.066 7.076L45.818 69.952a4.82 4.82 0 0 1-3.47 1.477" />
  </svg>
);
export default SvgRingTick;
