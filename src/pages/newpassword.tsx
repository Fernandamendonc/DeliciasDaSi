import Link from 'next/link';

import Image from 'next/image';
import logoImg from '../assets/Logo.svg'
import passwordImg from '../assets/lock.svg'

import { GlobalStyle } from '../styles/global'
import { Container, Content } from '../styles/newpassword'

export default function NewPassword(){
  return(
    <Container>
      <Content>
        <Image
          src={logoImg}
          alt="Logo"
          className='logo'
        />

        <div className="division"></div>

        <h2 className='title'>Digite a nova senha que deseja cadastrar</h2>

        <form>
          <div className="box">
            <Image 
              src={passwordImg}
              alt="Icone Senha"
            />
            <input type="password" placeholder='Senha'/>
          </div>
          <div className="box">
            <Image 
              src={passwordImg}
              alt="Icone Senha"
            />
            <input type="password" placeholder='Confirme a senha'/>
          </div>
        </form>

        <button className='continuar'>
          <Link href="login">
            <a>Continuar</a> 
          </Link>
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