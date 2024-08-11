import 
{MainContainer,
WebsiteLogo,
LogoText,
HeaderSection,
TabsList,
TabsContainer,
IconsContainer} from './styledComponents'
import { GoSearch } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
const Header =()=>{
    return (
        <MainContainer>
            <HeaderSection>
            <WebsiteLogo 
            src="https://res.cloudinary.com/dzmhdzvfb/image/upload/v1723310960/Logo_mfqwe1.jpg" 
            alt="website logo"/>
            <LogoText>Logo</LogoText>
            <IconsContainer>
                <GoSearch />
                <GoHeart/>
                <HiOutlineShoppingBag/>
                <CiUser/>
            <span>ENG <IoIosArrowDown /></span>
            </IconsContainer>
            </HeaderSection>
        <TabsContainer>
            <TabsList>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </TabsList>
        </TabsContainer>
        </MainContainer>
    )
}
export default Header