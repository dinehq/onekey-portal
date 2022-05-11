import { FC } from 'react';

import { FreeMode } from 'swiper';

import { Swiper, SwiperSlide } from '../../../../base';

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
          <span css={{ fontSize: 48, color: '#101111' }}>
            Why Choose OneKey
          </span>

          {/* controller */}
          <div css={{ display: 'flex', gap: 24 }}>
            <Arrow />
            <div
              css={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#101111',
                borderBottomLeftRadius: 999,
                borderBottomRightRadius: 999,
                borderTopLeftRadius: 999,
                borderTopRightRadius: 999,
                display: 'block',
              }}
            >
              <img
                alt="arrow.svg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAyCAYAAAD1CDOyAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFgSURBVHgB1dq9jcJAEIbh2bsLHJpOroQr4To4rhIoBSoCOoCM0KGzZT5kkBCJf+abnX0lyz+b+JE38WpFyLVt+y01p4BNu1plPf9JjT0Bj4MISULoPoVSOrwN5Lzuum4vxn0Kob7vr03TXBTy+zKg9/r8rOMnMYyCQPqiRy8IDYG8IFQE8oDQEYgNcUEgJsQNgVgQVwRiQNwRyBpSBIEsIcUQyApSFIEsIMURaCkkBAItgYRBoLmQUAg0BxIOgaZCQiLQFEhYBBoLSfiJl1ob/tm/pOZS2umihHxI/aW6ETn/63TaUdadLLsvuum0eRsYALgMjRgDQGERYwEoJGIKAIVDTAWgUIg5ABQGMReAQiCWAFBxxFIAKoqwAKBiCCsAKoKwBCB3hDUAuSIYAOSGYAGQC4IJQHQEG4CoCA8AoiG8AMh7W4Q5ADG3RSSF/DwfkgD09Itshx02a6k5j01bN656dAHpEMEkAAAAAElFTkSuQmCC"
                css={{ width: 23, height: 23 }}
              />
            </div>
          </div>
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
