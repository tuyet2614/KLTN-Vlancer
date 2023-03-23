import { Spin } from 'antd';

const LoadingComponent = () => {
  return (
    <div
      style={{
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        height: 'calc(100vh - 473px)',
      }}>
      <Spin size="large" />
    </div>
  );
};
export default LoadingComponent;
