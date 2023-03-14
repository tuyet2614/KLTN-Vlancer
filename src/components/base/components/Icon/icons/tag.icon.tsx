const TagIcon = (props: any) => (
  <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3.667 12.939 3.775 3.775a3.983 3.983 0 0 0 5.625 0l3.658-3.658a3.983 3.983 0 0 0 0-5.626l-3.78-3.763a3.958 3.958 0 0 0-3-1.158l-4.166.2a3.22 3.22 0 0 0-3.075 3.058l-.2 4.167a4 4 0 0 0 1.163 3.005v0Z"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.196 8.105a2.083 2.083 0 1 1-4.166 0 2.083 2.083 0 0 1 4.166 0Z" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
    <path d="m11.03 14.355 3.333-3.334" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default TagIcon;
