import styled from 'styled-components'

export const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 188px;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  background-color: rgba(255, 255, 255, 1);

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
`

export const WebsiteLogo = styled.img`
  height: 35px;

  @media (max-width: 768px) {
    height: 30px;
  }

  @media (max-width: 480px) {
    height: 25px;
  }
`

export const LogoText = styled.h1`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 36px;
  line-height: 43.57px;
  color: rgba(0, 0, 0, 1);
  width: 107px;
  height: 44px;

  @media (max-width: 768px) {
    font-size: 28px;
    width: auto;
    height: auto;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`

export const IconsContainer = styled.div`
  width: 244px;
  height: 24px;
  display: flex;
  gap: 28px;

  @media (max-width: 768px) {
    width: 180px;
    gap: 20px;
  }

  @media (max-width: 480px) {
    width: 150px;
    gap: 15px;
  }
`

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    display: none; /* Hide tabs on small screens */
  }
`

export const TabsList = styled.ul`
  list-style-type: none;
  font-family: Roboto;
  width: 636px;
  height: 24px;
  display: flex;
  align-items: center;
  gap: 64px;

  @media (max-width: 768px) {
    gap: 30px;
    width: auto;
  }

  @media (max-width: 480px) {
    display: none; /* Hide tabs on small screens */
  }
`
