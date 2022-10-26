import Link from 'next/link';

import Image from 'next/image';
import logoImg from '../assets/Logo.svg'
import emailImg from '../assets/email.svg'
import arrowImg from '../assets/arrow.svg'
import cardidImg from '../assets/id-card.svg'

import { GlobalStyle } from '../styles/global';
import { Container, Content} from '../styles/recoverpassword'

export default function RecorverPassword(){
  return(
    <Container>
      <Content>
        <Image 
          src={logoImg}
          alt='Icon Logo'
        />

        <div className='division'></div>

        <h2>Preencha os campos para recuperar sua senha</h2>
        
        <form>
          <div className="box">
            <Image 
              src={cardidImg}
              alt="Icone Card"
            />
            <input type="text" placeholder='Nome Completo'/>
          </div>
          <div className="box">
            <Image 
              src={emailImg}
              alt="Icone Email"
            />
            <input type="email" placeholder='Email'/>
          </div>
        </form>

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
        <GlobalStyle />
      </Content>
    </Container>
  );
}