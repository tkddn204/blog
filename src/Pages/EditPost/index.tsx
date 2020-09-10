import React, { FCEP } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'
import PostEditor from '../../Compositions/PostEditor'
import { AuthSelector, ProfileSelector } from '../../Features/Selectors'
import Loading from '../../Components/Loading'
import usePost from '../../Hooks/usePost'
import { FetchState } from '../../Types/firestore.schema'

const EditPost: FCEP = ({ className }) => {
  const { postId } = useParams()
  const { error, postData, fetchState } = usePost(postId)
  const { post, postContent } = postData
  const { t } = useTranslation()
  const auth = useSelector(AuthSelector)
  const profile = useSelector(ProfileSelector)

  let Content
  if (profile.isEmpty || profile.role !== 'admin') {
    Content = '권한이 없습니다.'
  } else if (auth.isLoaded) {
    if (auth.isEmpty) {
      Content = '로그인해주세요'
    } else if (postId && fetchState !== FetchState.empty) {
      Content = <PostEditor postObj={post} postContentObj={postContent} />
    } else {
      Content = <PostEditor />
    }
  } else if (error) {
    Content = error
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
