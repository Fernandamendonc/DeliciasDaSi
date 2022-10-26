import Link from 'next/link'

import Image from 'next/image'
import logoImg from '../assets/Logo.svg'
import googleImg from '../assets/google.svg'
import lockImg from '../assets/lock.svg'
import emailImg from '../assets/email.svg'
import arrowImg from '../assets/arrow.svg'

import { GlobalStyle } from '../styles/global'
import { Container, Content } from '../styles/login'

export default function Login(){
  return(
    <Container>
      <Content>
        <Image
          src={logoImg}
          alt="Logo"
          className='logo'
        />
        <h2 className='title'>Faça seu login para continuar</h2>
        <button type='submit' className='icongoogle'>
          <Image 
            src={googleImg}
            alt="Icone Google"
          />
          <p>Entrar com Google</p>
        </button>
        <h4>Ou</h4>
        <div className="email">
          <Image 
            src={emailImg}
            alt="Icone Email"
          />
          <input type="email" placeholder='Email'/>
        </div>
        <div className="password">
          <Image 
            src={lockImg}
            alt="Icone Senha"
          />
          <input type="password" placeholder='Senha'/>
        </div>
        <div className='forgot'>
          <Link href="/recoverpassword">
            <a>Esqueceu sua senha?</a>
          </Link>
        </div>

        <button 
          type='submit' className='entrar'
          >
          <div></div>
          <Link href="/">
            <a>Entrar</a> 
          </Link>
          <Image 
            src={arrowImg}
            alt="Icon Seta"
          />
        </button>

        <div className="register">
          <p>Não tem uma conta?</p>
          <Link href="/register">
            <a>Cadastre-se</a>
          </Link>
        </div>
        <GlobalStyle />
      </Content>
    </Container>
  )
}