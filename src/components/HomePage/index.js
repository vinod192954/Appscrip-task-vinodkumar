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
  state = { selectedCategory: "" ,showFilter:true};

  handleCategoryChange = (category) => {
    this.setState({ selectedCategory: category });
  };

  toggleFilteres=()=>{
    this.setState((prevState)=>({showFilter:!prevState.showFilter}))
  }

  render() {
    const { selectedCategory,showFilter } = this.state;
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
              <Select>
                <Option  value="recommended">RECOMMENDED</Option>
                <Option value="newest">NEWEST FIRST</Option>
                <Option value="popular">POPULAR</Option>
                <Option value="high-to-low">PRICE: HIGH TO LOW</Option>
                <Option value="low-to-high">PRICE: LOW TO HIGH</Option>
              </Select>
            </SelectContainer>
          </ShowHiddenFilterContainer>
          <hr />
          <ProductsAndFilters>
            {showFilter ? (<FiltersSection
              selectedCategory={selectedCategory}
              onCategoryChange={this.handleCategoryChange}
            />) : ""}
            <AllProducts selectedCategory={selectedCategory} />
          </ProductsAndFilters>
        </MainContainer>
      </>
    );
  }
}

export default HomePage;
