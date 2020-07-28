import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      
      <img className="Logo" src={Logo} alt="McFLix Logo" />
      <p>
        Criado por
        {' '}
        <a href="https://github.com/mateuscleite">
          Mateus Castilho Leite
        </a>
      </p>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
