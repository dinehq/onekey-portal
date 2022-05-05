import { FC } from 'react';

import { motion } from 'framer-motion';

import { Box, Logo } from '../../../base';

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.8 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemVariants = {
  open: {
    display: 'block',
    y: 0,
    opacity: 1,
    transition: { duration: 0.85 },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.85,
    },
  },
};

export const Slogan: FC = () => (
  <Box
    css={{
      paddingTop: '20vh',
      paddingBottom: '20vh',
    }}
  >
    <motion.p
      viewport={{ once: true }}
      variants={variants}
      whileInView="open"
      initial="closed"
      css={{
        margin: '0 auto',
        fontSize: `${(60 / 1400) * 100}vw`,
        fontWeight: 600,
        lineHeight: 1,
        textAlign: 'center',
      }}
    >
      <motion.span variants={itemVariants}>
        <Logo
          css={{
            width: `${(64 / 1400) * 100}vw`,
            height: `${(64 / 1400) * 100}vw`,
            display: 'inline',
            verticalAlign: 'bottom',
            color: '#2EDB43',
            marginRight: 6,
          }}
        />
        <span
          css={{
            color: '#2EDB43',
          }}
        >
          OneKey
        </span>{' '}
        is the smartest way
      </motion.span>
      <motion.span variants={itemVariants}>
        to secure, buy, exchange and{' '}
      </motion.span>
      <motion.span variants={itemVariants}>
        grow your crypto assets.
      </motion.span>
    </motion.p>
  </Box>
);
