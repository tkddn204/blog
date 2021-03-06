import React, { FCEP } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'
import { AuthSelector, ProfileSelector } from '../../Features/Selectors'
import Loading from '../../Components/Loading'
import usePost from '../../Hooks/usePost'
import Editor, { EditorData } from '../../Compositions/Editor'
import { addPostThunk, updatePostThunk } from '../../Features/post/postThunk'

const EditPost: FCEP = ({ className }) => {
  const { postId } = useParams()
  const { error, postData } = usePost(postId)
  const { post, postContent } = postData
  const { t } = useTranslation()
  const auth = useSelector(AuthSelector)
  const profile = useSelector(ProfileSelector)
  const dispatch = useDispatch()

  const onSavePost = (data: EditorData) => {
    if (data.title && data.content?.length) {
      const args = {
        post: {
          ...post,
          title: data.title,
          summary: data.summary,
        },
        postContent: {
          ...postContent,
          content: data.content,
        },
      }
      if (post?.id) {
        dispatch(updatePostThunk(args))
      } else {
        dispatch(addPostThunk(args))
      }
    }
  }

  let Content
  if (profile.isEmpty || profile.role !== 'admin') {
    Content = '권한이 없습니다.'
  } else if (auth.isLoaded) {
    if (auth.isEmpty) {
      Content = '로그인해주세요'
    } else {
      const editorData: EditorData = {
        title: post?.title,
        summary: post?.summary,
        content: postContent?.content,
      }
      Content = <Editor editorData={editorData} onSave={onSavePost} />
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
