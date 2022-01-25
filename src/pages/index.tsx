import type { NextPage } from 'next'
import useSWR from 'swr'
import { User } from '@/domains/User/User'
import { Template } from '@/components/templates/Template'
import { useSeo } from '@/lib/seo'
import { API_ENDPOINT } from '@/lib/env'
import { Contexts, SEO } from '@/types'

const Index: NextPage = () => {
  const seoData: SEO.Change = { title: 'Index', description: 'Indexの説明' }
  const { DefaultSeo, NextSeo } = useSeo(seoData)
  const { data } = useSWR<Contexts.User>(`${API_ENDPOINT}/api/user`)

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <h1>Hello, Boilerplate_Next!</h1>
      {data ? <User data={data} /> : null}
    </Template>
  )
}

export default Index
