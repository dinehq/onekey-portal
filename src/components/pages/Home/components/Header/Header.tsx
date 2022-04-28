import { FC } from 'react';

import {
  animate,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion';

import { useTheme } from '../../../../../theme';
import { Box, Button, Flex } from '../../../../base';

import backgroundImage from './background.jpg';

export const Header: FC = () => {
  const theme = useTheme();

  console.log(theme);

  const { scrollYProgress } = useViewportScroll();
  const padding = useTransform(scrollYProgress, (value) => value * 300);

  function onTap() {
    animate(scrollYProgress, 0);
  }

  return (
    <motion.div style={{ height: '90vh', padding }}>
      <Box
        {...{
          boxShadow: '0px -6px 40px rgba(0, 0, 0, 0.08)',
          height: '100%',
          paddingLeft: 64,
          paddingRight: 64,
          paddingTop: 78,
          paddingBottom: 78,
          borderRadius: 40,
          backgroundColor: '#e9e9e9',
          display: 'flex',
          alignItems: 'flex-end',
          label: 'Headline',
          backgroundImage: `url(${backgroundImage.toString()})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Flex {...{ flexDirection: 'column', gap: 20 }}>
          <h1
            css={{
              fontSize: 48,
              fontWeight: 600,
              lineHeight: '60px',
              color: '#101111',
            }}
          >
            All-in-One Crypto Wallet.
            <br />
            Trusted by Millions.
          </h1>
          <Flex {...{ gap: 20 }}>
            <Button {...{ width: 122, height: 50 }}>Launch App</Button>
            <Button {...{ width: 122, height: 50 }}>Go to shop</Button>
          </Flex>
          <span
            tabIndex={0}
            onKeyPress={onTap}
            role="button"
            onClick={onTap}
            css={{ fontSize: 12, color: '#101111' }}
          >
            Trustpilot score & review
          </span>
        </Flex>
      </Box>
    </motion.div>
  );
};
