import React, { FC } from 'react'
// import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import RightHeader from '../../Compositions/RightHeader'
// import usePost from '../../Hooks/usePost'
import LeftHeader from '../../Compositions/LeftHeader'
import PostEditor from '../../Compositions/PostEditor'

const EditPost: FC = () => {
  // TODO: 편집 기능 추가
  // const { postId } = useParams()
  // const [post, postContent, fetchState] = usePost(postId)
  const { t } = useTranslation()

  // TODO: auth 검사 필요

  // TODO: if post 못찾아오면 포스트가 없습니다 떠야함
  // if (!postId) return <Redirect to={{ pathname: '/' }} />

  return (
    <Layout>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <Section>
        <PostEditor />
      </Section>
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default EditPost
