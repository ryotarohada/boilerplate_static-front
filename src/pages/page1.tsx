import type { NextPage } from 'next';
import { TestViews } from '@/domains/TestComponents/TestViews';
import { useSeo } from '@/lib/seo';
import { SEO } from '@/types';
import { Template } from '@/components/templates/Template';

const Page1: NextPage = () => {
  const seoData: SEO.Change = { title: 'page1', description: 'page1の説明' };
  const { DefaultSeo, NextSeo } = useSeo(seoData);

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />

      <TestViews meta={seoData} fetchType="graphql" endpoint="query" />
    </Template>
  );
};

export default Page1;
