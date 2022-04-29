import { FC, ReactNode } from 'react';

import { motion } from 'framer-motion';

export interface ItemProps {
  children?: ReactNode;
}

const itemVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const Item: FC<ItemProps> = (props) => {
  const { children } = props;

  return (
    <motion.li
      css={{
        listStyle: 'none',
      }}
      variants={itemVariants}
      viewport={{ once: true, amount: 0.8 }}
    >
      {children}
    </motion.li>
  );
};
