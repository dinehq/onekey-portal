import { FC } from 'react';

import { Helmet } from 'react-helmet';

import { isBrowser } from '../../../utils';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  twitterUsername?: string;
  isArticle?: boolean;
}

export const SEO: FC<SEOProps> = (props) => {
  const {
    title,
    description,
    keywords,
    image = `https://xxx/images/og-image.jpg`,
    url = isBrowser() ? window.location.href : '',
    twitterUsername = 'null',
    isArticle = false,
  } = props;

  const seo = {
    title,
    description,
    keywords,
    image,
    url,
  };

  return (
    <Helmet>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />

      <meta name="baidu-site-verification" content="code-uUAnCVvnOb" />
      <meta name="sogou_site_verification" content="cqXJqxNMJ3" />
      <meta
        name="360-site-verification"
        content="f0790a9d6e2ba5b1960dadffc6b2d822"
      />
      <meta
        name="shenma-site-verification"
        content="2bb96deecda6f6012eb171acfc652f3f_1649382844"
      />

      {image && <meta name="image" content={seo.image} />}
      {image && <meta name="twitter:image:src" content={seo.image} />}
      {seo.url && <meta property="og:url" content={seo.url} />}
      {isArticle && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary_large_image" />
      {twitterUsername && (
        <meta name="twitter:creator" content={`@${twitterUsername}`} />
      )}
      {twitterUsername && (
        <meta name="twitter:site" content={`@${twitterUsername}`} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
    </Helmet>
  );
};
