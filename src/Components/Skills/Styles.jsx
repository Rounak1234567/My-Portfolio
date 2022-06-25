import styled from "styled-components";

export const SkillsDiv = styled.div`
  width: 100%;
  padding: 6px 0;
`;
export const SkillsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const Common = styled.div`
  /* width: 30%; */
  margin: 20px auto;
  text-align: center;
  justify-content: space-between;
`;
export const H1 = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.fontColorPrimary};
`;
export const Col = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: fit-content;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-left: 70px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-center;
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
    padding-left: 8px;
    width:100%
  }
`;

export const BoxDiv = styled.div`
  text-align: center;
  width: 220px;
  @media screen and (max-width: 480px) {
    width: 180px;
  }
`;

export const SkillBox = styled.div`
  padding: 40px;
  background: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.fontColorSecondary};
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  margin: 20px;
  transition: all 0.5s linear;
  &:hover {
    background: ${(props) => props.theme.commonBorder};
    color: ${(props) => props.theme.fontColorHeaderHover};
  }
  @media screen and (max-width: 480px) {
    margin: 5px;
    padding: 10px;
  }
`;

export const SkillBoxText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;
