import { FC } from 'react';

import { useTheme } from '../../../../../theme';
import { Box, Button } from '../../../../base';

export const Header: FC = () => {
  const theme = useTheme();

  console.log(theme);

  return (
    <Box
      {...{
        height: '100vh',
        paddingLeft: 64,
        paddingRight: 64,
        paddingTop: 78,
        paddingBottom: 78,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: '#e9e9e9',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        label: 'Headline',
      }}
    >
      <Box {...{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <span
          css={{
            fontSize: 48,
            fontWeight: 600,
            lineHeight: '52px',
            color: '#101111',
            label: 'title',
          }}
        >
          All-in-One Crypto Wallet. Trusted by Millions.
        </span>
        <Box {...{ display: 'flex', gap: 20 }}>
          <img
            alt="launchButton.png"
            src="data:image/png;base64,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"
            css={{ width: 151, height: 50 }}
          />
          <Button {...{ width: 122, height: 50 }}>Go to shop</Button>
        </Box>
        <span css={{ fontSize: 12, color: '#101111' }}>
          Trustpilot score & review
        </span>
      </Box>
    </Box>
  );
};
