import { memo, SVGProps } from 'react';

const QuestionIconComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 0a8 8 0 1 0 8 8 8.013 8.013 0 0 0-8-8Zm-.6 4.8a.6.6 0 0 1 1.2 0v4a.6.6 0 1 1-1.2 0v-4Zm1.336 6.704a.826.826 0 0 1-.168.264.924.924 0 0 1-.264.168.754.754 0 0 1-.608 0 .924.924 0 0 1-.264-.168.826.826 0 0 1-.168-.264.754.754 0 0 1 0-.608.72.72 0 0 1 .432-.432.8.8 0 0 1 .608 0 .72.72 0 0 1 .432.432.754.754 0 0 1 0 .608Z"
      fill="#B1B5C4"
    />
  </svg>
);

const QuestionIcon = memo(QuestionIconComponent);
export default QuestionIcon;
