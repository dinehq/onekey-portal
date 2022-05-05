import { FC } from 'react';

import { motion } from 'framer-motion';

import { usePositionAnimation } from '../../../../../hooks';
import { mergeRefs } from '../../../../../utils';
import { Box, Button, Flex } from '../../../../base';

import backgroundImage from './background.jpg';

export const Header: FC = () => {
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 60,
      to: 0,
    });

  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      from: 40,
      to: 0,
    });

  const allRef = mergeRefs(borderRadiusRef, paddingRef);

  return (
    <div ref={allRef}>
      <motion.div style={{ height: '100vh', padding: paddingMotionValue }}>
        <motion.div
          style={{
            boxShadow: '0px -6px 40px rgba(0, 0, 0, 0.08)',
            height: '100%',
            borderRadius: borderRadiusMotionValue,
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
                <Button>Launch App</Button>
                <Button variant="outline">Go to shop</Button>
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
