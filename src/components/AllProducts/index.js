import { Component } from "react";
import { ProductsListContainer, MainContainer } from "./styledComponents";
import ProductItem from "../ProductItem";

class AllProducts extends Component {
  state = { productsList: [],isLoading:false};

  componentDidMount() {
    this.getAllProducts();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory ||  prevProps.sortOption !== this.props.sortOption) {
      this.getAllProducts();
    }
  }

  getAllProducts = async () => {
    this.setState({isLoading:true})
    const {sortOption, selectedCategory} = this.props
    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
  }
  if (sortOption) {
    const separator = url.includes('?') ? '&' : '?';
    url += `${separator}sort=${sortOption}`;
}

    const response = await fetch(url);
    const data = await response.json();
    if (response.ok===true){
      this.setState({isLoading:false,productsList:data})
    }
   
  };

  renderLoader=()=>(
    <p >Loading.....</p>
  )

  render() {
    const { productsList,isLoading } = this.state;

    return (
      <MainContainer>
       {isLoading ? this.renderLoader() : (<ProductsListContainer>
          {productsList.map((eachProduct) => (
            <ProductItem key={eachProduct.id} product={eachProduct} />
          ))}
        </ProductsListContainer>)}
        
      </MainContainer>
    );
  }
}

export default AllProducts;
