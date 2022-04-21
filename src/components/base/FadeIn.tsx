import { FC } from 'react';

import { motion } from 'framer-motion';

export interface FadeInProps {
  children: React.ReactNode;
}

export const FadeIn: FC<FadeInProps> = (props) => {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
