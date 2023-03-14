import { SVGProps } from 'react';

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={14} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.293.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L7 2.414 1.707 7.707A1 1 0 0 1 .293 6.293l6-6Z" fill="#141414" />
  </svg>
);

export default ArrowIcon;
