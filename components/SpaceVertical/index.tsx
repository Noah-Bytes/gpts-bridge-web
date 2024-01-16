import { Space } from 'antd';
import type { SpaceSize } from 'antd/es/space';
import styles from './index.module.sass';

type IProps = {
  className?: string;
  size?: SpaceSize;
  style?: any;
  children: any;
};

export default function SpaceVertical({
  children,
  style,
  className,
  size,
}: IProps) {
  return (
    <Space
      size={size}
      style={style}
      direction="vertical"
      className={`${styles.content} ${className}`}
    >
      {children}
    </Space>
  );
}
