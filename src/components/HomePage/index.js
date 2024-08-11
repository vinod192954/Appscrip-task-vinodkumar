import Header from '../Header'
import 
{
MainContainer,
ShowHiddenFilterContainer,
TextContainer,
Texts,
TextContainerHeading,
TextContainerPara,
ShowHideFilter,
SelectContainer,
FilterHeading,
Select,
Option,
HorizontalLine,
ProductsAndFilters
} from './styledComponents'
import { IoIosArrowBack } from "react-icons/io";
import FiltersSection from '../FiltersSection';

import AllProducts from '../AllProducts';
const HomePage=()=>{
    return (
        <>
        <Header/>
        <MainContainer>
        <TextContainer>
            <Texts>
            <TextContainerHeading>DISCOVER OUR PRODUCTS</TextContainerHeading>
            <TextContainerPara>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</TextContainerPara>
            </Texts>
        </TextContainer>
        <HorizontalLine/>
        <ShowHiddenFilterContainer>
            <ShowHideFilter>
            <IoIosArrowBack color='#888792'/>
            <FilterHeading>HIDE FILTER</FilterHeading>
            </ShowHideFilter>
            <SelectContainer>
      <Select>
        <Option selected value="recommended">RECOMMENDED</Option>
        <Option value="newest">NEWEST FIRST</Option>
        <Option value="popular">POPULAR</Option>
        <Option value="high-to-low">PRICE: HIGH TO LOW</Option>
        <Option value="low-to-high">PRICE: LOW TO HIGH</Option>
      </Select>
    </SelectContainer>
        </ShowHiddenFilterContainer>
        <hr/>
        <ProductsAndFilters>
            <FiltersSection/>
            <AllProducts/>
        </ProductsAndFilters>
        </MainContainer>
        </>
    )
}

export default HomePage