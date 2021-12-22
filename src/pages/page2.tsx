import type { NextPage } from 'next';
import { TestViews } from '@/domains/TestComponents/TestViews';
import { useSeo } from '@/lib/seo';
import { SEO } from '@/types';
import { Template } from '@/components/templates/Template';

const Page2: NextPage = () => {
  const seoData: SEO.Change = { title: 'page2', description: 'page2の説明' };
  const { DefaultSeo, NextSeo } = useSeo(seoData);

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <TestViews meta={seoData} fetchType="swr" endpoint="name" />
    </Template>
  );
};

export default Page2;