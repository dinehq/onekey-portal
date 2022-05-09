import { FC } from 'react';

import { Box } from '../../../../base';

export interface ItemProps {
  image: string;
  title: string;
  description: string;
}

export const Item: FC<ItemProps> = (props) => {
  const { image, title, description } = props;
  return (
    <Box
      xs={{
        maxWidth: 754,
      }}
    >
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          textAlign: 'center',
          maxWidth: 500,
          margin: '0 auto',
        }}
      >
        <span
          css={{
            fontSize: 40,
            fontWeight: 600,
            lineHeight: '46px',
            color: '#101111',
          }}
        >
          {title}
        </span>
        <span
          css={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: '24px',
            color: '#101111',
          }}
        >
          {description}
        </span>
      </Box>

      <img
        style={{
          width: '100%',
        }}
        src={image}
        alt=""
        srcSet=""
      />
    </Box>
  );
};
