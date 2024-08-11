import { Component } from "react";
import {productsListContainer} from "./styledComponents"
import ProductItem from "../ProductItem";
class AllProducts extends Component{
    state = {productsList:[]}
    
    componentDidMount(){
        this.getAllProducts()
    }

    getAllProducts=async()=>{
        const url="https://fakestoreapi.com/products"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({productsList:data})
        console.log(data)
    }

    render(){
        const {productsList} = this.state
        return(
            <div>
                <h1>All products</h1>
                <productsListContainer>
                    {productsList.map((eachProduct)=>(
                        <ProductItem key={eachProduct.id} product={eachProduct}/>
                    ))}
                </productsListContainer>
            </div>
        )
    }
}
export default AllProducts