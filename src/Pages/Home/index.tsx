import React, { FC } from 'react'
import tw from 'twin.macro'

import Layout from '../../Components/Layout'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Logo from '../../Components/Logo'
import Nav from '../../Components/Nav'

import NavList from '../../Compositions/NavList'
import Index from '../../Compositions/PostList'

const HomeStyle = tw`
  bg-gray-100
`

const Home: FC = () => (
  <Layout css={HomeStyle}>
    <Header>
      <Logo />
      <NavList>
        <Nav key="nav-about" link="/about">
          About
        </Nav>
        <Nav key="nav-blog" link="/blog">
          Blog
        </Nav>
      </NavList>
    </Header>
    <Index />
    <Footer />
  </Layout>
)

export default Home
