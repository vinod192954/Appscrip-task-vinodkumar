import { Component } from "react";
import { ProductsListContainer, MainContainer } from "./styledComponents";
import ProductItem from "../ProductItem";

class AllProducts extends Component {
  state = { productsList: [] };

  componentDidMount() {
    this.getAllProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.getAllProducts();
    }
  }

  getAllProducts = async () => {
    const { selectedCategory } = this.props;

    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ productsList: data });
  };

  render() {
    const { productsList } = this.state;

    return (
      <MainContainer>
       
        <ProductsListContainer>
          {productsList.map((eachProduct) => (
            <ProductItem key={eachProduct.id} product={eachProduct} />
          ))}
        </ProductsListContainer>
      </MainContainer>
    );
  }
}

export default AllProducts;
