const SvgComponent = (props: any) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m11.05 3-6.842 7.242c-.287.34-.48.752-.558 1.191l-.308 2.701A1.273 1.273 0 0 0 4.9 15.609l2.683-.458a2.392 2.392 0 0 0 1.159-.625l6.841-7.242c1.184-1.25 1.717-2.675-.125-4.417C13.625 1.142 12.233 1.75 11.05 3Z"
      stroke="#141414"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9.908 4.208A5.105 5.105 0 0 0 14.45 8.5M2.5 18.334h15" stroke="#141414" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgComponent;
