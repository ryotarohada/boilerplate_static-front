import type { NextPage } from 'next'
import useSWR from 'swr'
import { Template } from '@/components/templates/Template'
import { LinkButton } from '@/components/parts/LinkButton'
import { useSeo } from '@/lib/seo'
import { API_ENDPOINT } from '@/lib/env'
import { Contexts, SEO } from '@/types'
import { UserCard } from '@/components/parts/UserCard.tsx'

const Index: NextPage = () => {
  const seoData: SEO.Change = { title: 'Index', description: 'Indexの説明' }
  const { DefaultSeo, NextSeo } = useSeo(seoData)
  const { data } = useSWR<Contexts.User>(`${API_ENDPOINT}/api/user`)

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <h1>Hello, Boilerplate_Next!</h1>
      {data ? <UserCard {...data} /> : null}
      <LinkButton href='/foo'>ページ遷移</LinkButton>
    </Template>
  )
}

export default Index
