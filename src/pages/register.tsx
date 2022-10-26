import Link from 'next/link'

import Image from 'next/image'
import logoImg from '../assets/Logo.svg'
import googleImg from '../assets/google.svg'
import arrowImg from '../assets/arrow.svg'

import { Container, Content } from '../styles/register'
import { GlobalStyle } from '../styles/global'
export default function Register(){
  return(
    <Container>
      <Content>
        <Image
            src={logoImg}
            alt="Logo"
            className='logo'
        />

        <div className="division"></div>

        <h2>Faça seu cadastro para comprar seus doces favoritos</h2>

        <button type='submit' className='icongoogle'>
          <Image 
            src={googleImg}
            alt="Icone Google"
            className='icongoogle'
          />
          <p>Entrar com Google</p>
        </button>

        <h4>Ou</h4>
        
        <form>
          <label> Nome completo
            <div className="box">
              <input type="text" placeholder='' />
            </div>
          </label>
          <label> Celular
            <div className="box">
              <input type="number" placeholder='' />
            </div>
          </label>
          <label> Email
            <div className="box email">
              <input type="email" placeholder='' />
            </div>
          </label>
          <label> Senha
            <div className="box">
              <input type="password" placeholder='' />
            </div>
          </label>
          <label> Confirme sua senha
            <div className="box">
              <input type="password" placeholder='' />
            </div>
          </label>
        </form>
        
        <button type='submit' className='cadastrar'>
          <div></div>
          <Link href="/login">
            <a>Cadastre-se</a>
          </Link>
          <Image 
            src={arrowImg}
            alt='Icon Seta'
          />
        </button>
        <div className="login">
          <p>Já tem uma conta?</p>
          <Link href="/login">
            <a>Faça seu login</a>
          </Link>
        </div>
        <GlobalStyle/>
      </Content>
    </Container>
  );
}