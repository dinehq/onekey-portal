import { FC } from 'react';

import { Footer, Nav } from '../../base';
import { FadeIn } from '../../base/FadeIn';

import { Hardware } from './components/Hardware';
import { Header } from './components/Header';
import { LogoWall } from './components/LogoWall';
import { Products } from './components/Products';
import { Rewards } from './components/Rewards';
import { Security } from './components/Security';
import { Slogan } from './components/Slogan';
import { Start } from './components/Start';
import { Why } from './components/Why';

export const Home: FC = () => (
  <div>
    <Nav />
    <Header />

    <LogoWall />

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

    <FadeIn>
      <Why />
    </FadeIn>

    <FadeIn>
      <Rewards />
    </FadeIn>

    <FadeIn>
      <Start />
    </FadeIn>

    <FadeIn>
      <Footer />
    </FadeIn>
  </div>
);
