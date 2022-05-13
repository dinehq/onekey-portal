import React from 'react';

import { Helmet } from 'react-helmet';

import { Box, Main, Navigation, PageFooter, SEO } from '../../base';
import { FadeIn } from '../../base/FadeIn';

import { Header, LogoWall } from './components';

export const Home: React.FC = () => (
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

      {/* <FadeIn>
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
      </FadeIn> */}
    </Main>

    <Box
      css={{
        backgroundColor: '#f0f1f2',
      }}
    >
      <FadeIn>{/* <Start /> */}</FadeIn>

      <FadeIn>
        <PageFooter />
      </FadeIn>
    </Box>
  </>
);
