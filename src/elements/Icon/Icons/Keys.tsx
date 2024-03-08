import type { SVGProps } from "react";
const SvgKeys = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M25.021 10.945a17.45 17.45 0 0 1 3.763-5.675C32.027 1.892 36.486 0 41.216 0 50-.405 57.838 6.486 58.784 15.541q.01.087.014.176l15.797 5.499c1.891.676 3.243 2.162 3.919 3.919l20.405 53.784c1.216 3.243-.27 6.892-3.378 8.378 0 0-.136 0-.136.135L62.838 99.459c-.811.406-1.757.541-2.703.541-.811 0-1.757-.135-2.567-.541a6.18 6.18 0 0 1-3.649-3.918l-17.36-47.773a19.1 19.1 0 0 1-7.775 2.367L15 93.108c-.135.406-.405.676-.676.946l-6.756 5.541c-.406.27-.811.405-1.352.405h-.405c-.676-.135-1.081-.541-1.352-1.081L.946 90.946c-.27-.541-.27-1.081-.135-1.487l3.378-10.135c.135-.54.541-.946 1.081-1.216.406-.135.946-.27 1.352-.135l1.351-4.324-.405-.271c-.811-.54-1.217-1.486-.946-2.432l3.378-10c.135-.541.541-.946 1.081-1.216.541-.271 1.081-.271 1.487-.135l1.891-5.676h-.27c-.811-.405-1.351-1.487-1.081-2.433l1.757-5.675c-4.46-3.784-6.892-9.46-6.892-15.406 0-10.031 7.446-18.317 17.048-19.46m14.936 34.411a19.74 19.74 0 0 0 6.4-11.573c4.457-.407 8.103-2.974 9.724-6.621.405-1.081 0-2.297-1.081-2.703s-2.297 0-2.703 1.082c-.983 2.09-3.085 3.62-5.696 4.083a20 20 0 0 0-1.083-5.691l3.266-5.149c.675-1.081 1.892-1.487 2.973-1.081l21.351 7.432c.676.135 1.216.811 1.487 1.487l20.54 53.783c.406 1.217-.135 2.703-1.216 3.244L61.216 95.676h-.135q-1.014.405-2.027 0a2.93 2.93 0 0 1-1.351-1.487zM28.003 14.882c-.198.962-.3 1.954-.3 2.956 0 1.834.366 3.6 1.05 5.213 3.269.492 5.706 3.253 5.706 6.679q0 .34-.031.672c.009.231-.024.465-.101.693-.617 3.11-3.309 5.391-6.624 5.391-3.784 0-6.757-2.972-6.757-6.756 0-2.713 1.528-5.009 3.787-6.091a18.2 18.2 0 0 1-1.084-5.801q0-1.295.185-2.564c-6.733 1.617-11.807 7.827-11.807 15.131-.135 5.136 2.297 10 6.351 13.109.676.54.946 1.351.676 2.162l-1.622 5.27.271.135c.946.405 1.351 1.487.946 2.433l-3.108 9.459c-.136.541-.541.946-1.082 1.216-.54.27-1.081.27-1.486.135l-2.162 6.352.405.27c.811.54 1.216 1.486.946 2.432l-2.567 7.973c-.136.541-.541.946-1.081 1.217-.406.135-.946.27-1.352.135l-2.297 7.162 2.162 4.865 4.189-3.514 14.189-43.784c.271-.81 1.081-1.351 1.892-1.351 8.514 0 15.271-7.027 15.271-15.54 0-8.274-6.509-15.271-14.565-15.659m-1.444 12.401A2.71 2.71 0 0 0 25 29.73a2.71 2.71 0 0 0 2.703 2.702c.977 0 1.837-.525 2.312-1.307a17.2 17.2 0 0 1-3.456-3.842M54.37 14.176l-1.127-.392c-2.838-.946-6.081.135-7.702 2.702l-2.098 3.186c-3.081-4.769-8.136-8.078-13.98-8.739a12.3 12.3 0 0 1 2.023-2.69c2.568-2.567 5.946-4.054 9.595-4.054h.135c6.242-.245 11.596 4.055 13.154 9.987" />
  </svg>
);
export default SvgKeys;