import { FC, useEffect } from 'react';

import { motion, useMotionValue, useSpring } from 'framer-motion';

import { useBoundingClientRect } from '../../../../../hooks';
import { Box, Button, Flex } from '../../../../base';

import backgroundImage from './background.jpg';

export const Header: FC = () => {
  const { ref, rect } = useBoundingClientRect();
  const paddingValue = useMotionValue(0);
  const padding = useSpring(paddingValue);
  const borderRadiusValue = useMotionValue(0);
  const borderRadius = useSpring(borderRadiusValue);

  useEffect(() => {
    if (rect && rect.top < -100) {
      paddingValue.set(60);
      borderRadiusValue.set(40);
    } else {
      paddingValue.set(0);
      borderRadiusValue.set(0);
    }
  }, [borderRadiusValue, paddingValue, rect]);

  return (
    <div ref={ref}>
      <motion.div style={{ height: '100vh', padding }}>
        <motion.div
          style={{
            boxShadow: '0px -6px 40px rgba(0, 0, 0, 0.08)',
            height: '100%',
            borderRadius,
            overflow: 'hidden',
          }}
        >
          <Box
            {...{
              height: '100%',
              paddingLeft: 64,
              paddingRight: 64,
              paddingTop: 78,
              paddingBottom: 78,
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

              <span css={{ fontSize: 12, color: '#101111' }}>
                Trustpilot score & review
              </span>
            </Flex>
          </Box>
        </motion.div>
      </motion.div>
    </div>
  );
};
