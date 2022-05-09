import { FC } from 'react';

import { useTransform } from 'framer-motion';

import { useElementInViewportProgress } from '../../../../../hooks/useElementInViewportProgress';
import { Box, Button, CanvasPlayer, Container } from '../../../../base';

export const Products: FC = () => {
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0, 1.5],
    [0, 59],
  );

  return (
    <Container>
      <div
        css={{
          paddingLeft: 87,
          paddingRight: 87,
          paddingTop: 87,
          paddingBottom: 87,
          display: 'flex',
          alignItems: 'center',
          label: 'Frame 67',
          position: 'relative',
        }}
      >
        <div css={{ display: 'flex', gap: 200, flexGrow: 1 }}>
          <div css={{ display: 'flex', gap: 24 }}>
            <div css={{ display: 'flex', flexDirection: 'column', gap: 336 }}>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div
                  css={{ display: 'flex', flexDirection: 'column', gap: 16 }}
                >
                  <span css={{ fontSize: 36, color: '#101111' }}>
                    Advanced on-chain wallet app
                  </span>
                  <span css={{ fontSize: 16, color: '#313638' }}>
                    Use the OneKey App separately to store and use your crypto
                    assets in a secure and convenient manner. Each user's assets
                    are secured appropriately and stored locally.
                  </span>
                </div>
                <Button>Launch App</Button>
              </div>
              <div css={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <span css={{ fontSize: 36, color: '#101111' }}>
                    Need more security? No problem.
                  </span>
                  <span css={{ fontSize: 16, color: '#313638' }}>
                    Hardware wallets take the securitisation of digital assets
                    to another level. From physically isolating hackers to
                    preventing Trojan horses and software attacks. All transfers
                    must be approved by the hardware wallet, so you don't have
                    to worry about the loss or theft of your mobile phone.
                  </span>
                </div>
                <Button variant="outline">Go to shop</Button>
              </div>
            </div>
          </div>

          <div ref={ref}>
            <Box
              css={{
                height: '100vh',
                position: 'relative',
              }}
            >
              <Box
                css={{
                  top: `calc(50% - ${502 / 2}px)`,
                  position: 'sticky',
                  width: 644,
                  height: 502,
                  borderRadius: 24,
                  overflow: 'hidden',
                }}
              >
                <CanvasPlayer
                  width={1288}
                  height={1004}
                  images={new Array(60)
                    .fill(0)
                    .map((_, i) => `/canvas/image${i}.jpg`)}
                  frame={parseInt(motionValue.get().toFixed(0))}
                />
              </Box>
            </Box>
          </div>
        </div>
      </div>
    </Container>
  );
};
