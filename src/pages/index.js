import React from 'react'
import Layout from '../components/Layout'
import TextScramble from '../components/Typography/TextScramble'

const IndexPage = () => (
  <Layout>
    <TextScramble component="h1">Hello there</TextScramble>
    <TextScramble component="p">
      I’m Roman Dubinin, front-end developer
    </TextScramble>
    <TextScramble component="p">
      Enjoying building blazing-fast web applications.
    </TextScramble>
  </Layout>
)

export default IndexPage
