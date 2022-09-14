import { IProduct } from '../../utils/interfaces/productInterface'
import {
  CardContainer,
  CardContent,
  CardFooter,
  ImageContainer,
} from './styles'

interface CardProps {
  product: IProduct
}

export const Card = ({ product }: CardProps) => {
  const { name, price, _id } = product
  return (
    <CardContainer>
      <CardContent to={`/product/${name}/${_id}`}>
        <ImageContainer>
          <img src={`/images/${_id}.png`} alt="" />
        </ImageContainer>

        <CardFooter>
          <span>{name}</span>
          <span>{price}</span>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
