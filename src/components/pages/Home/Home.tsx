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

    <Navigation />

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
