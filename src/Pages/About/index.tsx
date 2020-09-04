import React, { FC } from 'react'

import { useTranslation } from 'react-i18next'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Article from '../../Components/Article'
import RightHeader from '../../Compositions/RightHeader'
import LeftHeader from '../../Compositions/LeftHeader'

const About: FC = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Header>
        <LeftHeader />
        <RightHeader />
      </Header>
      <Article>About</Article>
      <Footer>{t('footer')}</Footer>
    </Layout>
  )
}

export default About
