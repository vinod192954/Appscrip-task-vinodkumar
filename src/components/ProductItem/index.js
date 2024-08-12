import {ListItem,ProductImage,ProductTitle,ProductPrice,ProductRating, ProductDescriptionContainer} from "./styledComponents"
const ProductItem =(props)=>{
    const {product} = props
    const {image,price,rating,title} = product
    const {rate} = rating
    return (
        <ListItem>
            <ProductImage src={image}/>
            <ProductTitle>{title}</ProductTitle>
            < ProductDescriptionContainer>
            <ProductPrice>{`Rs.${price} $`}</ProductPrice>
            <ProductRating>{`Rating ${rate}`}</ProductRating>
            </ProductDescriptionContainer>
        </ListItem>
    )
}

export default ProductItem