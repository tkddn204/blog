import React, { FCEP } from 'react'

import { useTranslation } from 'react-i18next'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'
import useAbout from '../../Hooks/useAbout'
import AboutView from '../../Compositions/AboutView'

const About: FCEP = ({ className }) => {
  const [about, fetchState] = useAbout()
  const { t } = useTranslation()

  return (
    <Layout className={className}>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <AboutView aboutObj={about} fetchState={fetchState} />
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default About
