import React, { memo, Suspense } from 'react';

interface IProps {
  name?: string;
  icon?: string;
  width?: number;
  height?: number;
  options?: {
    fill?: string;
    stroke?: string;
  };
  className?: string;
}

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 20;

const Icon = memo((props: IProps & React.HTMLProps<HTMLElement>) => {
  const { name, icon, width, height } = props;

  if (name) {
    const LoadedIcon = React.lazy(() => import('./icons/' + name + '.icon'));
    return (
      <Suspense
        fallback={
          <span
            style={{
              width: width || DEFAULT_WIDTH,
              height: height || DEFAULT_HEIGHT,
            }}></span>
        }>
        <span {...props}>
          <LoadedIcon />
        </span>
      </Suspense>
    );
  }

  return (
    <span {...props}>
      <img src={icon} alt="icon" width={width} height={height} />
    </span>
  );
});

export default Icon;
