import React, { FCEP } from 'react'

import { useTranslation } from 'react-i18next'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import PostList from '../../Compositions/PostList'
import RightHeader from '../../Compositions/RightHeader'
import usePostList from '../../Hooks/usePostList'
import LeftHeader from '../../Compositions/LeftHeader'

const Blog: FCEP = ({ className }) => {
  const [postList, fetchState] = usePostList()
  const { t } = useTranslation()
  return (
    <Layout className={className}>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <PostList postList={postList} fetchState={fetchState} />
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default Blog
