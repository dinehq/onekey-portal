import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

import { Box } from '../../Box';

import { LeftArea } from './LeftArea';
import { RightArea } from './RightArea';

export interface ProductPanelProps {
  children?: ReactNode;
  isActive: boolean;
}

export const ProductPanel: FC<ProductPanelProps> = (props) => {
  const { children, isActive } = props;

  return (
    <motion.div
      style={{
        backgroundColor: isActive ? '#fff' : '#fafafa',
        position: 'absolute',
        left: 0,
        top: 200,
        width: '100%',
        right: 0,
        height: isActive ? '20vh' : 0,
        overflow: 'hidden',
      }}
    >
      <Box>
        <LeftArea />
        <RightArea />
      </Box>
      {children}
    </motion.div>
  );
};
