import { MagnifyingGlass, ShoppingCart, SignIn } from 'phosphor-react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../store'
import { singOut } from '../../store/reducers/loginSlice'
import { HeaderContainer, LadoDireito, LadoEsquerdo, SearchBar } from './style'

export const Header = () => {
  const dispatch = useDispatch()
  const { success } = useSelector((state: RootState) => state.users)

  const handleLogout = () => {
    dispatch(singOut())
    // navigate('/login/user')
  }

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
        {success ? (
          <button onClick={handleLogout} style={{ cursor: 'pointer' }}>
            Logout
          </button>
        ) : (
          <Link to="/login/user">
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
