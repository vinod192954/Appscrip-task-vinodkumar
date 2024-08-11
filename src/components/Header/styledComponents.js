import styled from 'styled-components' 

export const MainContainer = styled.div`
box-sizing:border-box;
width:100%;
height:188px;
top:32px;
border:0px  0px 1px 0px;
border-bottom: 1px solid rgba(229, 229, 229, 1); 
background-color: rgba(255, 255, 255, 1);
`
export const WebsiteLogo = styled.img`
height:35px;


`
export const LogoText = styled.h1`
font-family: 'Inter', sans-serif;
weight:800;
font-size:36px;
line-height:43.57px;
color:rgba(0, 0, 0, 1);
width:107px;
height:44px;
top:36px;
left:667px;`

export const IconsContainer = styled.div`
width:244px;
height:24px;
display:flex;
gap:28px;`

export const HeaderSection = styled.div`

display:flex;
justify-content:space-between;
align-items:center;
gap:18px;
`
export const TabsContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
`

export const TabsList = styled.ul`
list-style-type:none;
font-family:Roboto;
width:636px;
height:24px;
display:flex;
align-items:center;
gap:64px;
`