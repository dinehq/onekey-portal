import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { motion } from 'framer-motion';
import { StaticImage } from 'gatsby-plugin-image';

import { usePositionAnimation } from '../../../../../hooks';
import { mergeRefs } from '../../../../../utils';
import { Box, Button, Container, Flex, H1, Logo, Span } from '../../../../base';

export const Header: FC = () => {
  const theme = useTheme();
  const { ref: paddingRef, motionValue: paddingMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 60,
      to: 0,
    });

  const { ref: borderRadiusRef, motionValue: borderRadiusMotionValue } =
    usePositionAnimation({
      defaultProgress: 1,
      from: 40,
      to: 0,
    });

  const allRef = mergeRefs(borderRadiusRef, paddingRef);

  return (
    <motion.div
      ref={allRef}
      style={{
        height: '100vh',
        padding: paddingMotionValue,
      }}
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
          xs={{
            position: 'relative',
            height: '100%',
            paddingLeft: 64,
            paddingRight: 64,
            paddingTop: 78,
            paddingBottom: 78,
            backgroundColor: '#e9e9e9',
          }}
        >
          <StaticImage
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: 1,
            }}
            quality={100}
            layout="constrained"
            alt="background"
            src="./background.jpg"
          />
          <Container
            xs={{
              zIndex: 2,
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
                gap: 24,
              }}
            >
              <H1
                xs={{
                  ...theme.text.medium800,
                }}
                xl={{
                  ...theme.text.medium900,
                }}
                xxl={{
                  ...theme.text.medium1000,
                }}
              >
                All-in-One Crypto Wallet.
                <br />
                Trusted by Millions.
              </H1>
              <Flex {...{ gap: 20 }}>
                <Button
                  rightIcon={
                    <Logo
                      css={{
                        width: 26,
                        height: 26,
                      }}
                    />
                  }
                >
                  Launch App
                </Button>
                <Button variant="outline">Go to shop</Button>
              </Flex>

              <Span xs={{ ...theme.text.normal100 }}>
                Trustpilot score & review
              </Span>
            </Flex>
          </Container>
        </Box>
      </motion.div>
    </motion.div>
  );
};
