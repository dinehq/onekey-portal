import image0 from './images/item0.png';
import image1 from './images/item1.png';
import image2 from './images/item2.png';
import image3 from './images/item3.png';

export function useData() {
  return [
    {
      image: image0,
      title: 'Free and open source',
      description:
        'Other crypto wallets may have backdoor or viruses. We are completely transparent.',
    },
    {
      image: image1,
      title: 'Trade at the best price',
      description:
        "Hassle free, you won't need to jump between exchanges. Securely trade your crypto assets with us. ",
    },
    {
      image: image2,
      title: 'Peace of mind',
      description:
        'We use industry-leading technology to protect your crypto, making it super secure.',
    },
    {
      image: image3,
      title: 'All platforms covered',
      description:
        "iOS, macOS, Android, Windows, Linux, Chrome, Firefox, Edge, Brave... We got'em all",
    },
  ];
}
