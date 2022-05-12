import { FC } from 'react';

import { FreeMode } from 'swiper';

import { theme } from '../../../../../theme';
import { Flex, Swiper, SwiperSlide } from '../../../../base';

import { Arrow } from './Arrow';
import { Item } from './Item';
import { useData } from './useData';

export const Why: FC = () => {
  const itemStyle = {
    width: 421,
  };
  const data = useData();

  return (
    <section>
      <div
        css={{
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
            <Arrow direction="left" />
            <Arrow direction="right" />
          </Flex>
        </div>
        <div
          css={{
            width: '100%',
            overflow: 'hidden',
          }}
        >
          <Swiper
            slidesPerView="auto"
            spaceBetween={0}
            modules={[FreeMode]}
            freeMode={{
              enabled: true,
            }}
          >
            {data.map((item) => (
              <SwiperSlide style={{ ...itemStyle, marginLeft: 64 }}>
                <Item {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
