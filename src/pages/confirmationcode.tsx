import Link from 'next/link';

import Image from 'next/image';
import logoImg from '../assets/Logo.svg'
import arrowImg from '../assets/arrow.svg'

import { GlobalStyle } from '../styles/global'
import { Container, Content } from '../styles/confirmationcode'

export default function ConfirmationCode(){
  return(
    <Container>
      <Content>
        <Image
            src={logoImg}
            alt="Logo"
            className='logo'
        />

        <div className="division"></div>

        <h2 className='title'>Digite o código de confirmação que foi enviado no seu e-mail</h2>

        <button className='continuar'>
          <div></div>
          <Link href="login">
            <a>Continuar</a> 
          </Link>
          <Image 
            src={arrowImg}
            alt="Icon Seta"
          />
        </button>

        <div className="login">
          <p>Lembrou sua senha?</p>
          <Link href="/login">
            <a>Faça seu login</a>
          </Link>
        </div>
        <GlobalStyle/>
      </Content>
    </Container>
  );
}