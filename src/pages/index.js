import React from 'react'
import Layout from 'components/Layout'
import {Divider, TextScramble} from 'components'
import Portrait from 'components/Portrait'

const IndexPage = () => (
  <Layout>
    <TextScramble component="h1">Hello there</TextScramble>
    <Divider />
    <TextScramble component="p">
      I’m Roman Dubinin, front-end developer
    </TextScramble>
    <TextScramble component="p">
      Enjoying building blazing-fast web applications.
    </TextScramble>
    <Portrait useMouseTracking={false} />
  </Layout>
)

export default IndexPage
