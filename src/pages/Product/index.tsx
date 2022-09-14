import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../../store'
import {
  Description,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductOptions,
} from './styles'

export const Product = () => {
  const params = useParams()
  const products = useSelector((state: RootState) => state.products)
  const product = products.find((product) => product._id === params.id)
  console.log(product)

  return (
    <ProductContainer>
      <ProductInfo>
        <ProductImage>
          <img
            src={`/images/${product?._id}.png`}
            alt=""
            style={{ width: '100%' }}
          />
        </ProductImage>
        <ProductOptions>
          <h1>{product?.name}</h1>
          <p>{`Preço: ${product?.price}`}</p>
        </ProductOptions>
      </ProductInfo>
      <Description>
        {product?.details.map((data) => (
          <p key={data.title}>{`${data.title}: ${data.body}`}</p>
        ))}
      </Description>
    </ProductContainer>
  )
}
