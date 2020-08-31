import React, { FC } from 'react'
import tw from 'twin.macro'

import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Logo from '../../Components/Logo'
import Nav from '../../Components/Nav'

import NavList from '../../Compositions/NavList'
import PostList from '../../Compositions/PostList/PostList'

const HomeStyle = tw`
  bg-gray-100
`

const Home: FC = () => (
  <Layout css={HomeStyle}>
    <Header>
      <Logo />
      <NavList>
        <Nav link="/about">About</Nav>
        <Nav link="/blog">Blog</Nav>
      </NavList>
    </Header>
    <PostList />
    <Footer />
  </Layout>
)

export default Home
