import { MagnifyingGlass, ShoppingCart, SignIn } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { HeaderContainer, LadoDireito, LadoEsquerdo, SearchBar } from './style'

export const Header = () => {
  // const dispatch = useDispatch()
  const { users } = useSelector((state: RootState) => state)

  // const handleLogout = () => {
  //   dispatch(singOut())
  //   // navigate('/login/user')
  // }

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
        {users.success ? (
          <Link to="/user/login">
            {`Logado como: ${users.userInfo?.email}`}
          </Link>
        ) : (
          <Link to="/user/login">
            <SignIn size={24} />
            Entre ou Cadastre-se
          </Link>
        )}
        <Link to="/cart">
          <ShoppingCart size={24} />
        </Link>
      </LadoDireito>
    </HeaderContainer>
  )
}
