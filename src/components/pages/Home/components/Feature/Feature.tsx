import { FC, ReactNode } from 'react';

import { useTheme } from '@emotion/react';
import { useTransform } from 'framer-motion';

import { useElementInViewportProgress } from '../../../../../hooks/useElementInViewportProgress';
import { Box, CanvasPlayer, Section } from '../../../../base';

import { Header } from './Header';
import { HorizontalScrollingView } from './HorizontalScrollingView';
import { Item } from './Item';
import { useData } from './useData';

export interface FeatureProps {
  children?: ReactNode;
}

export const Feature: FC<FeatureProps> = () => {
  const theme = useTheme();
  const { ref, elementInViewportProgress } = useElementInViewportProgress(0);
  const motionValue = useTransform(
    elementInViewportProgress,
    [0.4, 0.8],
    [0, 29],
  );
  const data = useData();

  return (
    <Section
      xs={{
        position: 'relative',
        background: theme.background.test100,
        zIndex: 100,
        paddingBottom: 120,
        width: '100%',
      }}
    >
      <div ref={ref} />

      <Box
        xs={{
          height: '300vh',
          width: 100,
        }}
      />

      <Box
        xs={{
          bottom: 0,
          position: 'sticky',
          paddingTop: 120,
        }}
      >
        <Box
          xs={{
            overflow: 'hidden',
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
          }}
        >
          <CanvasPlayer
            frame={parseInt(motionValue.get().toFixed(0))}
            width={2880}
            height={960}
            images={new Array(30)
              .fill('')
              .map(
                (_, index) =>
                  `/home-software-header/home-software-header${index}.jpg`,
              )}
          />
        </Box>

        <Header />

        <HorizontalScrollingView progress={elementInViewportProgress}>
          {data.map((itemData, index) => (
            <Item
              key={index}
              image={itemData.image}
              title={itemData.title}
              description={itemData.description}
            />
          ))}
        </HorizontalScrollingView>
      </Box>
    </Section>
  );
};
