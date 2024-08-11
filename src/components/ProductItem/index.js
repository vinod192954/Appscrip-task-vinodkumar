import {ListItem,ProductImage,ProductTitle} from "./styledComponents"
const ProductItem =(props)=>{
    const {product} = props
    const {category,description,id,image,price,rating,title} = product
    return (
        <ListItem>
            <ProductImage src={image}/>
            <ProductTitle>{title}</ProductTitle>
        </ListItem>
    )
}

export default ProductItem