import styled from "styled-components";
import Color from "../../constant/Color";
import Avatar from "./Avatar";
import Bio from "./Bio";
import Links from "./Links";
import Stats from "./Stats";
import Title from "./Title";
import { HiOutlineEmojiSad } from "react-icons/hi";

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
    return (
    <div style={{
        backgroundColor: Color.backgroundWhite,
        borderRadius: "12px",
        marginTop: "1.5rem",
    }}>
        <div style={{
            padding: "1rem",
            color: Color.primaryText,
            textAlign: "center",
        }}>
            <HiOutlineEmojiSad size={150} />
        </div>
        <div style={{
            fontSize: "1.5rem",
            color: Color.secondaryText,
            textAlign: "center",
            padding: "1rem",
        }}>
            No profile found
        </div>
    </div>)
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
