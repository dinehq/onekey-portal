import { FC } from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, Navigation, PageFooter, SEO } from '../../base';
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
  <>
    <Helmet>
      <title>Onekey</title>
      <SEO title="onekey" description="onekey" />
    </Helmet>

    <Navigation />

    <Main>
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
    </Main>

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
  </>
);
