import type { NextPage } from 'next';
import { Template } from '@/components/templates/Template';
import { useSeo } from '@/lib/seo';
import { Contexts, SEO } from '@/types';
import { User } from '@/domains/User/User';
import useSWR from 'swr';
import { API_ENDPOINT } from '@/lib/env';

const Index: NextPage = () => {
  const seoData: SEO.Change = { title: 'Index', description: 'Indexの説明' };
  const { DefaultSeo, NextSeo } = useSeo(seoData);
  const { data, error } = useSWR<Contexts.User>(`${API_ENDPOINT}/api/user`)

  console.log(`${API_ENDPOINT}user`)

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <h1>Hello, Boilerplate_Next!</h1>
      {data ? <User data={data}/> : null}
    </Template>
  );
};

export default Index;
