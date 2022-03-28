import type { NextPage } from 'next'
import useSWR from 'swr'
import { Template } from '@/components/templates/Template'
import { LinkButton } from '@/components/parts/LinkButton'
import { useSeo } from '@/lib/seo'
import { UserLists } from '@/domains/UserLists'
import { UsersResponse } from '@/mocks/rest/handlers/users'
import { API_ENDPOINT } from '@/lib/constants/env'
import { CustomToast } from '@/components/parts/Toast'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  const { data, error } = useSWR<UsersResponse>(`${API_ENDPOINT}/user`)

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <h1>Hello, Boilerplate_Next!</h1>
      <UserLists users={data?.users} />
      {error && (
        <CustomToast severity='error' message='通信エラーが発生しました' />
      )}
      <LinkButton href='/foo'>ページ遷移</LinkButton>
    </Template>
  )
}

export default Index
