import { FC, useState } from 'react';

import Swiper, { FreeMode, Navigation } from 'swiper';

import { theme } from '../../../../../theme';
import { Flex, Swiper as SwiperComponent, SwiperSlide } from '../../../../base';

import { Arrow } from './Arrow';
import { Item } from './Item';
import { useData } from './useData';

export const Why: FC = () => {
  const itemStyle = {
    width: 421,
  };
  const data = useData();
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();

  return (
    <section>
      <div
        css={{
          position: 'relative',
          zIndex: 1,
          paddingTop: 64,
          paddingBottom: 64,
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: 97,
          label: 'whySection',
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingLeft: 64,
            paddingRight: 64,
          }}
        >
          <span css={{ ...theme.text.medium900, color: '#101111' }}>
            Why Choose OneKey
          </span>

          {/* controller */}
          <Flex gap={8}>
            <Arrow
              onClick={() => {
                thumbsSwiper?.slidePrev();
              }}
              direction="left"
            />
            <Arrow
              onClick={() => {
                thumbsSwiper?.slideNext();
              }}
              direction="right"
            />
          </Flex>
        </div>
        <div
          css={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <SwiperComponent
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            slidesPerView="auto"
            spaceBetween={0}
            modules={[FreeMode, Navigation]}
            freeMode={{
              enabled: true,
            }}
          >
            {data.map((item) => (
              <SwiperSlide style={{ ...itemStyle, marginLeft: 64 }}>
                <Item {...item} />
              </SwiperSlide>
            ))}
          </SwiperComponent>
        </div>
      </div>
    </section>
  );
};
