import Container from '../components/container'
import Nav from '../components/nav'
import Layout from '../components/layout'
import Head from 'next/head'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>Alan Donohoe 🛠 Senior Software Engineer </title>
        </Head>
        <Container>
          <Nav />
        </Container>
      </Layout>
    </>
  )
}
