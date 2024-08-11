import {MainContainer,WebsiteLogo,LogoText} from './styledComponents'
const Header =()=>{
    return (
        <MainContainer>
            <WebsiteLogo 
            src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310960/Logo_mfqwe1.jpg" 
            alt="website logo"/>
            <LogoText>Logo</LogoText>
        </MainContainer>
    )
}
export default Header