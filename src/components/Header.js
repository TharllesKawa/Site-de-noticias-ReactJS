import React from 'react'
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #c3170b;
  color: #0077c9;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
  color: #ffffff;

  @media (max-width: 820px) {
        font-size: 2.5rem
}
`;

const MenuItem = styled.a`
  color: #ffffff;
  text-decoration: none;
  margin-left: 1rem;
`;

function Header() {
  return (
    <div>
       <HeaderContainer>
        <Logo>Noticiário React</Logo>
        </HeaderContainer> 
    </div>
  )
}

export default Header