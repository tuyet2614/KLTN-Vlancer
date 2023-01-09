import React, { Suspense } from 'react';

interface IProps {
  name?: string;
  icon?: string;
  width?: number;
  height?: number;
  options?: {
    fill?: string;
    stroke?: string;
  };
}

const DEFAULT_WIDTH = 20;
const DEFAULT_HEIGHT = 20;

const Icon = (props: IProps = {}) => {
  const { name, icon } = props;

  const height = props?.height || DEFAULT_HEIGHT;
  const width = props?.width || DEFAULT_WIDTH;

  if (icon) {
    return (
      <span>
        <img src={icon} alt="icon" width={width} height={height} />
      </span>
    );
  }

  if (name) {
    const LoadedIcon = React.lazy(() => import('./icons/' + name + '.icon'));
    return (
      <Suspense
        fallback={
          <span
            style={{
              width,
              height,
            }}></span>
        }>
        <span>
          <LoadedIcon />
        </span>
      </Suspense>
    );
  }
};
export default Icon;
