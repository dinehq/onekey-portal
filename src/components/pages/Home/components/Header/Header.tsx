import { FC } from 'react';

import { motion } from 'framer-motion';

import { usePositionAnimation } from '../../../../../hooks';
import { mergeRefs } from '../../../../../utils';
import { Box, Button, Container, Flex } from '../../../../base';

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
    <motion.div
      ref={allRef}
      style={{ height: '100vh', padding: paddingMotionValue }}
    >
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
            backgroundImage: `url(${backgroundImage.toString()})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Container
            xs={{
              height: '100%',
              position: 'relative',
            }}
          >
            <Flex
              {...{
                position: 'absolute',
                left: 0,
                bottom: 0,
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <h1
                css={{
                  fontSize: `${(60 / 1920) * 100}vw`,
                  fontWeight: 600,
                  lineHeight: 1.3,
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
          </Container>
        </Box>
      </motion.div>
    </motion.div>
  );
};
