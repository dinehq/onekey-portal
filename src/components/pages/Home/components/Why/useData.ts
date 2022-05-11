import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';

export function useData() {
  return [
    {
      image: image1,
      title: 'Beginner friendly',
      description:
        "Use our products with ease whether you are an experienced practitioner or a beginner, even it's for your grandma.",
    },
    {
      image: image2,
      title: 'Software and hardware, better together',
      description:
        'Wanna be safe and easy at the same time when investing cryptos? You can have both here.',
    },
    {
      image: image3,
      title: 'The hub for your cryptos',
      description:
        'Invest, trade, track DeFi & NFT portfolios, fiat on-off-ramps, and even more.',
    },
    {
      image: image4,
      title: 'Ultra-fast customer service response',
      description:
        'Our customer service and engineers respond rapidly to your needs.',
    },
  ];
}
