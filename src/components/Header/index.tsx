import Link from 'next/link'

import Image from 'next/image'
import logoImg from '../../assets/Logo.svg'
import buttonImg from '../../assets/button-cart.svg'

import { Container, Contente } from './styles'
import { GlobalStyle } from '../../styles/global'

export function Header() {
  return(
    <Container>
      <Contente>
        <div></div>
        <Image
          src={logoImg}
          alt="Logo"
        />
        <nav>
          <Image 
            src={buttonImg}
            alt='Icon Carrinho'
          />
          <button>
            <Link href="/login">
              <a>Faça seu login</a>
            </Link>
          </button>
        </nav>
        <GlobalStyle />
      </Contente>
    </Container>
  )
}