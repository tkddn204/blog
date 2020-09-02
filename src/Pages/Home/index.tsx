import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import PostList from '../../Compositions/PostList'
import Article from '../../Components/Article'
import RightHeader from '../../Compositions/RightHeader'
import usePostList from '../../Hooks/usePostList'
import LeftHeader from '../../Compositions/LeftHeader'

const Blog: FC = () => {
  const [postList, fetchState] = usePostList()
  const { t } = useTranslation()
  return (
    <Layout>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <Article>
        <PostList postList={postList} fetchState={fetchState} />
      </Article>
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default Blog
