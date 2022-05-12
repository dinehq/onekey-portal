import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Button, Container, Flex } from '../../../../base';

import placeholderImage from './images/placeholder.png';
import { Item } from './Item';
import { useData } from './useData';

export const Security: FC = () => {
  const theme = useTheme();
  const data = useData();

  return (
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
          <Flex direction="column" gap={68}>
            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                flexGrow: 1,
              }}
            >
              <Box css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <span css={{ ...theme.text.medium700, color: '#8a9195' }}>
                  SECURITY
                </span>
                <span css={{ ...theme.text.medium1100, color: '#101111' }}>
                  Security,
                  <br /> both hard and soft.
                </span>
              </Box>

              <Box>
                <Button variant="outline">Learn More</Button>
              </Box>
            </div>

            <div
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                flexGrow: 1,
              }}
            >
              {data.map((item) => (
                <Item {...item} />
              ))}
            </div>
          </Flex>

          {/* right */}
          <Box css={{ borderRadius: 40, overflow: 'hidden' }}>
            <img
              alt="sideImage.png"
              src={placeholderImage}
              css={{ width: 633 }}
            />
          </Box>
        </div>
      </Container>
    </section>
  );
};
