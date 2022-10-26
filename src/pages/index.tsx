import type { NextPage } from 'next'
import { Carrousel } from '../components/Carrousel'

import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Carrousel />
      <GlobalStyle />
    </>
  )
}

export default Home
