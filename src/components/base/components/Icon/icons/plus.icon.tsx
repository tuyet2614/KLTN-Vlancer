const SvgComponent = (props: any) => (
  <svg width={25} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path d="M11.5 11V5h2v6h6v2h-6v6h-2v-6h-6v-2h6Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" transform="translate(.5)" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
