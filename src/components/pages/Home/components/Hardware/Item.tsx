import { FC } from 'react';

import { useTheme } from '@emotion/react';

import { Box } from '../../../../base';

export interface ItemProps {
  image: string;
  title: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description } = props;
  const theme = useTheme();

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        flex: 1,
      }}
    >
      <Box
        xs={{
          margin: '0 auto',
          width: 310,
          height: 384,
          backgroundImage: `url(${image})`,
          backgroundSize: 'auto 80%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Box css={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Box
          css={{
            height: 1,
            width: '100%',
            backgroundColor: '#ffffff',
          }}
        />
        <Box css={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <span css={{ ...theme.text.medium600, color: '#ffffff' }}>
            {title}
          </span>
          <span css={{ ...theme.text.normal300, color: '#ffffff' }}>
            {description}
          </span>
        </Box>
      </Box>
    </Box>
  );
};
