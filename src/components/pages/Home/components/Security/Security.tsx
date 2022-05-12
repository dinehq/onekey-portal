import { FC } from 'react';

import { Button, Container } from '../../../../base';

import placeholderImage from './images/placeholder.png';

export const Security: FC = () => (
  <section>
    <Container>
      <div
        css={{
          paddingTop: 16,
          paddingBottom: 16,
          backgroundColor: '#ffffff',
          display: 'flex',
          gap: 46,
          label: 'Security',
        }}
      >
        <div css={{ display: 'flex', flexDirection: 'column', gap: 68 }}>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              flexGrow: 1,
            }}
          >
            <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span css={{ fontSize: 24, color: '#8a9195' }}>SECURITY</span>
              <span css={{ fontSize: 48, color: '#101111' }}>
                Security, both hard and soft.
              </span>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
          <div
            css={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              flexGrow: 1,
            }}
          >
            <div
              css={{
                backgroundColor: '#ffffff',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
              }}
            >
              <div
                css={{ height: 1, width: '100%', backgroundColor: '#101111' }}
              />
              <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span css={{ fontSize: 24, color: '#101111' }}>
                  Your crypto, in your hands
                </span>
                <span css={{ fontSize: 16, color: '#101111' }}>
                  OneKey will not store your private keys or recovery seed, all
                  our hardware and software are open source.
                </span>
              </div>
            </div>
            <div
              css={{
                backgroundColor: '#ffffff80',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
              }}
            >
              <div
                css={{ height: 1, width: '100%', backgroundColor: '#101111' }}
              />
              <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span css={{ fontSize: 24, color: '#101111' }}>
                  Simple yet secure
                </span>
                <span css={{ fontSize: 16, color: '#101111' }}>
                  Use the OneKey App by itself or with the hardware, keeping it
                  simple for beginners without compromising on security.
                </span>
              </div>
            </div>
            <div
              css={{
                backgroundColor: '#ffffff80',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
              }}
            >
              <div
                css={{ height: 1, width: '100%', backgroundColor: '#101111' }}
              />
              <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span css={{ fontSize: 24, color: '#101111' }}>
                  Truly open source
                </span>
                <span css={{ fontSize: 16, color: '#101111' }}>
                  Open source means that we don't hide any code and are open to
                  inspection by everyone, which takes courage and commitment.
                </span>
              </div>
            </div>
            <div
              css={{
                backgroundColor: '#ffffff80',
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
              }}
            >
              <div
                css={{ height: 1, width: '100%', backgroundColor: '#101111' }}
              />
              <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span css={{ fontSize: 24, color: '#101111' }}>
                  End-to-end encryption
                </span>
                <span css={{ fontSize: 16, color: '#101111' }}>
                  OneKey uses industry-leading encryption technology to store
                  your information locally. Only you can decrypt that
                  information.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div css={{ display: 'flex' }}>
          <img
            alt="sideImage.png"
            src={placeholderImage}
            css={{ width: 633 }}
          />
        </div>
      </div>
    </Container>
  </section>
);
