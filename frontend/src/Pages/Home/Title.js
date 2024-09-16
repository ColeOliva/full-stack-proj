import { CiCirclePlus } from 'react-icons/ci';
import styled from 'styled-components';
import Color from "../../constant/Color";

const Title = ({ information }) => {
  return (
    <TitleContainer>
      <TextContent>
        <Name>
          {information.name ? information.name : information.login}
        </Name>
        <Username>
          <a
            href={`https://github.com/${information.login}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{information.login}
          </a>
        </Username>
      </TextContent>
      <IconContainer>
        <CiCirclePlus size={40} cursor={"pointer"} />
      </IconContainer>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: ${Color.headerFontSize};
  font-weight: ${Color.fontWeight};
`;

const Username = styled.div`
  margin-top: 0.25rem;

  a {
    text-decoration: none;
    color: ${Color.tertiaryText};
  }
`;

const IconContainer = styled.div`
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export default Title;
