import { Product } from '../../pages/Home'
import {
  CardContainer,
  CardContent,
  CardFooter,
  ImageContainer,
} from './styles'

interface CardProps {
  product: Product
}

export const Card = ({ product }: CardProps) => {
  const { name, price } = product
  return (
    <CardContainer>
      <CardContent href="/Produtos/Produto/">
        <ImageContainer>
          <img src="./images/1656093596794_mini.webp" alt="" />
        </ImageContainer>

        <CardFooter>
          <span>{name}</span>
          <span>{price}</span>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
