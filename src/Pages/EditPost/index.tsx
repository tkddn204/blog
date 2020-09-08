import React, { FCEP } from 'react'
import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'
import PostEditor from '../../Compositions/PostEditor'
import { AuthSelector } from '../../Features/Selectors'
import Loading from '../../Components/Loading'

const EditPost: FCEP = ({ className }) => {
  // const { postId } = useParams()
  // const [post, postContent, fetchState] = usePost(postId)
  const { t } = useTranslation()
  const auth = useSelector(AuthSelector)

  // TODO: 편집 기능 추가
  // TODO: if post 못찾아오면 포스트가 없습니다 떠야함
  // if (!postId) return <Redirect to={{ pathname: '/' }} />

  let Content
  if (auth.isLoaded) {
    if (auth.isEmpty) {
      Content = '로그인해주세요'
    } else {
      Content = <PostEditor />
    }
  } else {
    Content = <Loading />
  }

  return (
    <Layout className={className}>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <Section custom={['center']}>{Content}</Section>
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default EditPost
