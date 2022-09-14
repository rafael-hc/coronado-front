import { MagnifyingGlass, ShoppingCart, SignIn } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { HeaderContainer, LadoDireito, LadoEsquerdo, SearchBar } from './style'

export const Header = () => {
  return (
    <HeaderContainer>
      <LadoEsquerdo>
        <Link to="/">
          <img src="/images/logo-coronado.jpg" alt="" />
        </Link>
      </LadoEsquerdo>
      <SearchBar>
        <input type="text" placeholder="pesquisar..." />
        <button>
          <MagnifyingGlass size={24} />
        </button>
      </SearchBar>
      <LadoDireito>
        <Link to="/login/user">
          <SignIn size={24} />
          Entre ou Cadastre-se
        </Link>
        <Link to="/cart">
          <ShoppingCart size={24} />
        </Link>
      </LadoDireito>
    </HeaderContainer>
  )
}
