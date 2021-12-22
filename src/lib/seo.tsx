import { DefaultSeo, NextSeo } from 'next-seo';
import { DEFAULT_FRONTEND_ORIGIN } from './env';
import { SEO } from '@/types';

/** OG画像幅。Facebook推奨に合わせ1200 */
const ogImageWidth = 1200;
/** OG画像高さ。Facebook推奨に合わせ630 */
const ogImageHeight = 630;

/** デフォルトのSEO設定。
 * 必要な部分をページ毎で上書きして使用する
 * @see https://github.com/garmeeh/next-seo
 */
const MyDefaultSeo = (): JSX.Element => {
  const siteName = '$site-name';
  const titleTemplate = `${siteName} | %s`;
  const description = '$site-description';
  const ogImageUrl = `${DEFAULT_FRONTEND_ORIGIN}${'$og-image-path'}`;
  const canonical = DEFAULT_FRONTEND_ORIGIN;

  return (
    <DefaultSeo
      defaultTitle={siteName}
      titleTemplate={titleTemplate}
      description={description}
      canonical={canonical}
      openGraph={{
        description,
        title: siteName,
        images: [{ url: ogImageUrl, height: ogImageHeight, width: ogImageWidth, alt: siteName }],
        type: 'website',
        site_name: siteName,
        url: canonical,
      }}
    />
  );
};

/**
 * SEOコンポーネントを返すHO関数
 */
export const useSeo = (changeObj?: SEO.Change) => ({
  DefaultSeo: MyDefaultSeo,
  NextSeo: changeObj
    ? () => <NextSeo title={changeObj.title} description={changeObj.description} />
    : () => <NextSeo />,
});
