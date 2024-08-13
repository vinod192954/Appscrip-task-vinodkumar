import { Component } from "react";
import Header from '../Header';
import FiltersSection from '../FiltersSection';
import AllProducts from '../AllProducts';
import {
  MainContainer,
  TextContainer,
  Texts,
  TextContainerHeading,
  TextContainerPara,
  ShowHiddenFilterContainer,
  ShowHideFilter,
  FilterHeading,
  SelectContainer,
  Select,
  ShowHideFilterButton,
  Option,
  HorizontalLine,
  ProductsAndFilters
} from './styledComponents';
import { IoIosArrowBack } from "react-icons/io";

class HomePage extends Component {
  state = { selectedCategory: "" ,showFilter:true,isLoader:false,sortOption:"asc"};

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  toggleFilteres=()=>{
    this.setState((prevState)=>({showFilter:!prevState.showFilter}))
  }

  onChangeOptions=(event)=>{
    this.setState({sortOption:event.target.value})
  }


  render() {
    const { selectedCategory,showFilter,sortOption } = this.state;
    const showFilterText = showFilter ? "HIDE FILTERS" : "SHOW FILTERS"
    return (
      <>
        <Header />
        <MainContainer>
          <TextContainer>
            <Texts>
              <TextContainerHeading>DISCOVER OUR PRODUCTS</TextContainerHeading>
              <TextContainerPara>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</TextContainerPara>
            </Texts>
          </TextContainer>
          <HorizontalLine />
          <ShowHiddenFilterContainer>
            <ShowHideFilter>
              <IoIosArrowBack color='#888792'/>
              <ShowHideFilterButton type="button" onClick={this.toggleFilteres}>
              <FilterHeading>{showFilterText}</FilterHeading>
              </ShowHideFilterButton>
            </ShowHideFilter>
            <SelectContainer>
              <Select onChange={this.onChangeOptions}>
                <Option value="desc">PRICE: HIGH TO LOW</Option>
                <Option value="asc">PRICE: LOW TO HIGH</Option>
              </Select>
            </SelectContainer>
          </ShowHiddenFilterContainer>
          <hr />
          <ProductsAndFilters>
            {showFilter ? (<FiltersSection
              selectedCategory={selectedCategory}
              onCategoryChange={this.handleCategoryChange}
            />) : ""}
            <AllProducts sortOption={sortOption} selectedCategory={selectedCategory} />
          </ProductsAndFilters>
        </MainContainer>
      </>
    );
  }
}

export default HomePage;
