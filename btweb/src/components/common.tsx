import { Descriptions } from 'antd';
import { useEffect, useState } from 'react';

export const getIsMobile = () => window.innerWidth <= 768;

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
};

export const CustomWidgetWrapper = (props) => {
  const { children, bordered = true, column, title = '' } = props;

  const isMobile = useIsMobile();

  return (
    <Descriptions
      column={!isMobile && column ? column : { md: 1, sm: 1, xs: 1 }}
      layout={isMobile ? 'vertical' : 'horizontal'}
      size="small"
      bordered={bordered}
      style={{ background: 'white', marginBottom: '0.5rem' }}
      title={title}
    >
      {children}
    </Descriptions>
  );
};
