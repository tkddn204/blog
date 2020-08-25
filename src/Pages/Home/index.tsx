import React, { FC } from 'react'
import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import PostList from '../../Features/PostList/PostList'

const Home: FC = () => (
  <Layout>
    <Header />
    <PostList />
    <Footer />
  </Layout>
)

export default Home
