import styled from "styled-components";

export const A = styled.a`
    outline: none;
    color: #fff;
    text-decoration: none;
    margin: 5px;
    border: 1px solid rgb(211, 220, 230);
    background-color: ${(props) => props.theme.fontColorPrimary};
    color: ${(props) => props.theme.cardColor};
    border-radius: 5px 5px 5px 5px;
    padding: 13px 40px;
    &:hover {
        color: #fff;
        background-color: #0556f3;
        border: 1px solid rgb(211, 220, 230);
    }
`;


export const BoxDiv = styled.div`
  text-align: center;
  width: 33.3333%;
  @media (max-width: 1025px) {
    width: 50%;
  }
  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ServiceBox = styled.div`
  padding-bottom: 5px;
  background: ${(props) => props.theme.cardColor};
  color: ${(props) => props.theme.fontColorSecondary};
  box-shadow: 0px 12px 24px rgb(2 30 84 / 10%);
  margin: 10px;
  /* transition: all 0.5s linear; */
  &:hover {
    box-shadow: 0px 12px 24px ${(props) => props.theme.cardColor};
    /* color: #fff; */
  }
`;

export const ProjectDiv = styled.div`
  width: 85%;
  margin: 0 auto;
  @media (max-width: 1125px) {
    width: 95%;
  }
`;
export const ServiceBoxHeader = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
  color: ${(props) => props.theme.fontColorHeader};
`;
export const ServiceBoxP = styled.div`
  font-size: 14px;
  /* text-align: left; */
  color: ${(props) => props.theme.fontColorSecondary};
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;
