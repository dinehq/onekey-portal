import { FC } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Navigation, PageFooter, SEO } from '../../base';
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
    <Helmet>
      <title>Onekey</title>
      <SEO title="onekey" description="onekey" />
    </Helmet>

    <Box
      xs={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 'fit-content',
        zIndex: 1,
      }}
    >
      <Navigation />
    </Box>

    <main>
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
    </main>

    <Box
      css={{
        backgroundColor: '#f0f1f2',
      }}
    >
      <FadeIn>
        <Start />
      </FadeIn>

      <FadeIn>
        <PageFooter />
      </FadeIn>
    </Box>
  </div>
);
