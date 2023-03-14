import { AnyARecord } from 'dns';

const SvgComponent = (props: AnyARecord) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m9-10v11m5-4-5 4.667L7 10" stroke="#8AAC00" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default SvgComponent;
