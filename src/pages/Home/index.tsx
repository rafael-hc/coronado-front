import { addProducts, fetchProd } from '../../store/reducers/productSlice'
import { useEffect } from 'react'
import { MostVendor } from './MostVendor'
import { useAppDispatch } from '../../store/hooks'

export const Home = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProd())
  }, [dispatch])

  const handleAddProduct = () => {
    const product = {
      name: 'Must filhote raça pequena2',
      category: 'Rações',
      price: 225,
      inventory: 50,
      details: [
        {
          _id: '631e2be4d5490f67c5a157f1',
          title: 'Tamanho',
          body: '15kg',
        },
      ],
      createdAt: new Date('2022-09-11T17:46:49.218Z'),
      _id: '631e2be4d5490f67c5adsa157ssf0',
    }
    dispatch(addProducts(product))
  }
  return (
    <div>
      <MostVendor />
      <button onClick={handleAddProduct} style={{ cursor: 'pointer' }}>
        Adicionar Produto
      </button>
    </div>
  )
}
