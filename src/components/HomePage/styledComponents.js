import styled  from "styled-components";

export const MainContainer = styled.div`
box-sizing:border-box;
width:100%;
height:750vh
`

export const TextContainer = styled.div`
display:flex;
width:100%;
justify-content:center;
align-items:center;
`

export const TextContainerHeading = styled.h1`
font-family: sans-serif;
width:666px;
weight:200;
font-size:35px;
line-height:72px;
color:background: #252020;
`
export const TextContainerPara=styled.p`
width:721px;
height:10px;
weight:400;
font-size:22px;
line-height:30px;
display:flex;
align-items:center;
`
export const Texts= styled.div`
width:721px;
height:168px;
box-size:border-box;
display:flex;
flex-direction:column;
align-items:center;
`
export const ShowHiddenFilterContainer = styled.div`
width:1248px;
height:88px;
display:flex;
box-size:border-box;
padding:10px;
justify-content:space-between;
`

export const ShowHideFilter = styled.div`
display:flex;
align-items:center;
`
export const RecommendedFilter = styled.div`
display:flex;
align-items:center;
`

export const FilterHeading =styled.h1`
color:#888792;
font-weight:400;
font-size:16px;
`
export const HorizontalLine = styled.hr`
margin-top:50px;
`
export const SelectContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Select = styled.select`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  appearance: none; /* Removes the default arrow */
  width: 200px; /* Adjust width as needed */
`;

export const Option = styled.option`
  padding: 10px;
  font-size: 16px;
`;

export const ProductsAndFilters = styled.div`
box-sizing:border-box;
display:flex;
height:auto;
width:100%;
`
export const ShowHideFilterButton = styled.button`
background-color:transparent;
border-width:0px;
`