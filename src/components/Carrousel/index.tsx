import Image from 'next/image'
import bannerImg from '../../assets/banner-background.svg'

import { GlobalStyle } from '../../styles/global'
import { Container, Contente } from './styles'

export function Carrousel() {
  return(
    <Container>
      <Contente>
        <GlobalStyle />
      </Contente>
    </Container>
  )
}