import styled from "styled-components";
import Color from "../../constant/Color";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Links from "./Links";
import Stats from "./Stats";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  margin: 1rem;
  background-color: ${Color.backgroundWhite};
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 1rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  width: 95%;
  margin-left: 0.5rem;

  @media (max-width: 992px) {
    width: 100%-2rem;
    padding: 0.5rem;
    margin-left: 0;
  }
`;

const InformationArea = ({ information }) => {
  if (!information) {
    return <div style={{ marginTop: "2rem" }}>No information to display</div>; // need to do no profile found
  }

  return (
    <Container>
      <div>
        <Avatar information={information} />
      </div>
      <Info>
        <Title information={information} />
        <Bio information={information} />
        <Stats information={information} />
        <Links information={information} />
      </Info>
    </Container>
  );
};

export default InformationArea;
