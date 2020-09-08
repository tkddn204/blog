import React, { FCEP } from 'react'
import { useTranslation } from 'react-i18next'

import { useSelector } from 'react-redux'
import { AuthSelector, ProfileSelector } from '../../Features/Selectors'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Section from '../../Components/Section'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'
import Loading from '../../Components/Loading'
import AboutEditor from '../../Compositions/AboutEditor'
import useAbout from '../../Hooks/useAbout'
import { FetchState } from '../../Types/firestore.schema'

const EditPost: FCEP = ({ className }) => {
  const [about, fetchState] = useAbout()
  const { t } = useTranslation()
  const auth = useSelector(AuthSelector)
  const profile = useSelector(ProfileSelector)

  let Content
  if (profile.isEmpty || profile.role !== 'admin') {
    Content = '권한이 없습니다.'
  } else if (auth.isLoaded) {
    if (auth.isEmpty) {
      Content = '로그인해주세요'
    } else if (fetchState !== FetchState.empty) {
      Content = <AboutEditor aboutObj={about} />
    } else {
      Content = <Loading />
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
