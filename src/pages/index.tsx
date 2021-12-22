import type { NextPage } from 'next';
import { TestViews } from '@/domains/TestComponents/TestViews';
import { useSeo } from '@/lib/seo';
import { SEO } from '@/types';
import { Template } from '@/components/templates/Template';

const Index: NextPage = () => {
  const seoData: SEO.Change = { title: 'Index', description: 'Indexの説明' };
  const { DefaultSeo, NextSeo } = useSeo(seoData);

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />

      <TestViews meta={seoData} fetchType="swr" endpoint="message" />
    </Template>
  );
};

export default Index;
