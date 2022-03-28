import type { NextPage } from 'next'
import { Button, Typography } from '@mui/material'
import { useCallback } from 'react'
import { Template } from '@/components/templates/Template'
import { useSeo } from '@/lib/seo'
import { UserLists } from '@/domains/ItemList'
import { CustomToast } from '@/components/parts/Toast'
import { useFetchItems } from '@/services/items'

const Index: NextPage = () => {
  const { DefaultSeo, NextSeo } = useSeo({
    title: 'Index',
    description: 'Indexの説明',
  })

  const { data, error, mutate } = useFetchItems()
  const onMutate = useCallback(() => mutate(data), [data, mutate])

  return (
    <Template>
      <DefaultSeo />
      <NextSeo />
      <Typography component='h1'>Hello, Boilerplate_Next!</Typography>
      <UserLists items={data?.items} />
      {error && (
        <CustomToast severity='error' message='通信エラーが発生しました' />
      )}
      <Button variant='contained' onClick={onMutate}>
        update
      </Button>
    </Template>
  )
}

export default Index
