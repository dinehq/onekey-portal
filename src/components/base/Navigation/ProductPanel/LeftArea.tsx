import { FC, ReactNode } from 'react';

import { Box, Li, Ul } from '../../Box';

export interface LeftAreaProps {
  children?: ReactNode;
}

const items = [
  'OneKey Mini',
  'OneKey Touch',
  'OneKey Pro',
  'OneKey Lite',
  'KeyTag',
];

export const LeftArea: FC<LeftAreaProps> = (props) => {
  const { children } = props;

  return (
    <Box>
      <Ul>
        {items.map((item, index) => (
          <Li
            xs={{
              listStyle: 'none',
            }}
            key={index}
          >
            {item}
          </Li>
        ))}
      </Ul>
      {children}
    </Box>
  );
};
