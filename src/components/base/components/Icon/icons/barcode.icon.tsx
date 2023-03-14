const SvgComponent = (props: any) => (
  <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.5 20.5h-10c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M6.5 8v8-8Z" fill="currentColor" />
    <path d="M6.5 8v8M9.5 8v4M9.5 15v1M15.5 8v1M12.5 8v8M15.5 12v4M18.5 8v8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgComponent;
