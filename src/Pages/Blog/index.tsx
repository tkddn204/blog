import React, { FCEP } from 'react'
import { useParams } from 'react-router-dom'

import { useTranslation } from 'react-i18next'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import PostList from '../../Compositions/PostList'
import RightHeader from '../../Compositions/RightHeader'
import usePostList from '../../Hooks/usePostList'
import LeftHeader from '../../Compositions/LeftHeader'

const Blog: FCEP = ({ className }) => {
  const { listPage } = useParams()
  const [postList, fetchState] = usePostList(listPage * 10)
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
