import { SVGProps } from 'react';

const ImportIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24px" height="24px" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2v6l2-2" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <path d="m12 8-2-2 2 2Z" fill="currentColor" />
    <path
      d="m12 8-2-2M7 12c-4 0-4 1.79-4 4v1c0 2.76 0 5 5 5h8c4 0 5-2.24 5-5v-1c0-2.21 0-4-4-4a2.36 2.36 0 0 0-1.8.6l-1.02 1.08a3.001 3.001 0 0 1-4.37 0L8.8 12.6A2.36 2.36 0 0 0 7 12v0ZM5 12V8c0-2.01 0-3.67 3-3.96M19 12V8c0-2.01 0-3.67-3-3.96"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ImportIcon;
