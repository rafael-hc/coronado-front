import { Card } from '../../../components/Card'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { MostVendorContainer } from './styles'

export const MostVendor = () => {
  const products = useSelector((state: RootState) => state.products)
  return (
    <MostVendorContainer>
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </MostVendorContainer>
  )
}
