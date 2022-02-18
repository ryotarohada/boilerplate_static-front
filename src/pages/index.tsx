import type { NextPage } from 'next'
import { Template } from '@/components/templates/Template'
import { LinkButton } from '@/components/parts/LinkButton'
import { useSeo } from '@/lib/seo'
import { UserLists } from '@/domains/UserLists'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <h1>Hello, Boilerplate_Next!</h1>
      <UserLists />
      <LinkButton href='/foo'>ページ遷移</LinkButton>
    </Template>
  )
}

export default Index
