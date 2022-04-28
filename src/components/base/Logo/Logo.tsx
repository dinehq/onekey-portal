import { FC, SVGProps } from 'react';

// svg icons
export type LogoProps = SVGProps<SVGSVGElement>;

export const Logo: FC<LogoProps> = (props) => {
  const { children, ...otherProps } = props;

  return (
    <svg
      width="65"
      height="64"
      viewBox="0 0 65 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 64C54.5914 64 64.5 54.0914 64.5 32C64.5 9.90862 54.5914 0 32.5 0C10.4086 0 0.5 9.90862 0.5 32C0.5 54.0914 10.4086 64 32.5 64ZM35.3857 13.5696H26.4834L24.9217 18.292H29.8662V28.2395H35.3857V13.5696ZM42.6504 40.2785C42.6504 45.8856 38.105 50.4311 32.4979 50.4311C26.8908 50.4311 22.3453 45.8856 22.3453 40.2785C22.3453 34.6714 26.8908 30.126 32.4979 30.126C38.105 30.126 42.6504 34.6714 42.6504 40.2785ZM38.0413 40.2785C38.0413 43.3401 35.5594 45.822 32.4978 45.822C29.4363 45.822 26.9544 43.3401 26.9544 40.2785C26.9544 37.217 29.4363 34.735 32.4978 34.735C35.5594 34.735 38.0413 37.217 38.0413 40.2785Z"
        fill="#16D629"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.5 64C54.5914 64 64.5 54.0914 64.5 32C64.5 9.90862 54.5914 0 32.5 0C10.4086 0 0.5 9.90862 0.5 32C0.5 54.0914 10.4086 64 32.5 64ZM35.3857 13.5696H26.4834L24.9217 18.292H29.8662V28.2395H35.3857V13.5696ZM42.6504 40.2785C42.6504 45.8856 38.105 50.4311 32.4979 50.4311C26.8908 50.4311 22.3453 45.8856 22.3453 40.2785C22.3453 34.6714 26.8908 30.126 32.4979 30.126C38.105 30.126 42.6504 34.6714 42.6504 40.2785ZM38.0413 40.2785C38.0413 43.3401 35.5594 45.822 32.4978 45.822C29.4363 45.822 26.9544 43.3401 26.9544 40.2785C26.9544 37.217 29.4363 34.735 32.4978 34.735C35.5594 34.735 38.0413 37.217 38.0413 40.2785Z"
        fill="currentColor"
      />
    </svg>
  );
};
