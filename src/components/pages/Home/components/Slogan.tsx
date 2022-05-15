import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';

import { dynamicTextStyle } from '../../../../utils';
import { Box, Logo, Section, Span } from '../../../base';

const variants = {
  open: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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

export const Slogan: FC = () => {
  const theme = useTheme();

  return (
    <Section
      xs={{
        paddingTop: '16vh',
        paddingBottom: '16vh',
      }}
    >
      <Box
        xs={{
          textAlign: 'center',
          ...theme.text.medium800,
        }}
        l={{
          ...dynamicTextStyle(theme.text.medium900, 'large'),
        }}
        xl={{
          ...dynamicTextStyle(theme.text.medium1000, 'xlarge'),
        }}
        xxl={{
          ...theme.text.medium1100,
        }}
      >
        <motion.p
          viewport={{ once: true }}
          variants={variants}
          whileInView="open"
          initial="closed"
        >
          <motion.span variants={itemVariants}>
            <Logo
              css={{
                width: 80,
                height: 80,
                display: 'inline',
                verticalAlign: 'bottom',
                color: '#2EDB43',
                marginRight: 6,
                ...theme.text.medium1100,
              }}
            />
            <Span
              xs={{
                color: '#2EDB43',
              }}
            >
              OneKey{' '}
            </Span>
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
    </Section>
  );
};
