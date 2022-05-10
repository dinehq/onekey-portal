import { FC } from 'react';

import { Box, Navigation, PageFooter } from '../../base';
import { FadeIn } from '../../base/FadeIn';

import {
  Feature,
  Hardware,
  Header,
  LogoWall,
  Products,
  Rewards,
  Security,
  Slogan,
  Start,
  Why,
} from './components';

export const Home: FC = () => (
  <div>
    <div
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'fit-content',
        zIndex: 1,
      }}
    >
      <Navigation />
    </div>

    <Header />

    <FadeIn>
      <LogoWall />
    </FadeIn>

    <FadeIn>
      <Slogan />
    </FadeIn>

    <FadeIn>
      <Products />
    </FadeIn>

    <FadeIn>
      <Hardware />
    </FadeIn>

    <FadeIn>
      <Security />
    </FadeIn>

    <Feature />

    <Why />

    <FadeIn>
      <Rewards />
    </FadeIn>

    <Box backgroundColor="#f0f1f2">
      <FadeIn>
        <Start />
      </FadeIn>

      <FadeIn>
        <PageFooter />
      </FadeIn>
    </Box>
  </div>
);
