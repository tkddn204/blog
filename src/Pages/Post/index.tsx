import React, { FCEP } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import RightHeader from '../../Compositions/RightHeader'
import usePost from '../../Hooks/usePost'
import LeftHeader from '../../Compositions/LeftHeader'
import PostView from '../../Compositions/PostView'

const Post: FCEP = ({ className }) => {
  const { postId } = useParams()
  const { error, postData, fetchState } = usePost(postId)
  const { post, postContent } = postData
  const { t } = useTranslation()

  // TODO: if post 못찾아오면 포스트가 없습니다 떠야함
  if (!postId || error) return <Redirect to={{ pathname: '/' }} />

  return (
    <Layout className={className}>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <Section custom={['center']}>
        <PostView
          post={post}
          postContent={postContent}
          fetchState={fetchState}
        />
      </Section>
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default Post
