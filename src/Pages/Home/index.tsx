import React, { FC } from 'react'

import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Logo from '../../Components/Logo'
import PostList from '../../Compositions/PostList'
import Article from '../../Components/Article'
import RightHeader from '../../Compositions/RightHeader'

const Home: FC = () => (
  <Layout>
    <Header>
      <Logo />
      <RightHeader />
    </Header>
    <Article>
      <PostList />
    </Article>
    <Footer />
  </Layout>
)

export default Home
