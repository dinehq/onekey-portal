import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../base';

export interface ItemProps {
  title?: string;
  description?: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { title, description } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        backgroundColor: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
      }}
    >
      <div css={{ height: 1, width: '100%', backgroundColor: '#101111' }} />
      <div css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span css={{ ...theme.text.medium700, color: '#101111' }}>{title}</span>
        <span css={{ ...theme.text.normal400, color: '#101111' }}>
          {description}
        </span>
      </div>
    </Box>
  );
};
