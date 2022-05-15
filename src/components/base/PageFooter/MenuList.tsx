import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box, Span } from '../Box';

import { usePageFooterData } from './usePageFooterData';

export const MenuList: FC = () => {
  const theme = useTheme();
  const { menuData } = usePageFooterData();

  return (
    <Box
      xs={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {/* level1 */}
      {menuData.map((item) => (
        <Box
          xs={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            paddingBottom: 50,
          }}
          s={{
            width: '50%',
            paddingBottom: 80,
          }}
          l={{
            width: 'fit-content',
            // paddingRight: 36,
            ':last-child': {
              paddingRight: 0,
            },
          }}
          xl={
            {
              // paddingRight: 60,
            }
          }
          xxl={
            {
              // paddingRight: 80,
            }
          }
        >
          <Span
            css={{
              ...theme.text.medium200,
              color: theme.colors.white,
              opacity: 0.6,
            }}
          >
            {item.name}
          </Span>
          <Box
            xs={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
            s={{
              gap: 16,
            }}
          >
            {/* level2 */}
            {item.list.map((childItem) => (
              <Span
                key={childItem.name}
                css={{ ...theme.text.normal200, color: theme.colors.white }}
              >
                {childItem.name}
              </Span>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};
