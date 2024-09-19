import { CiCircleRemove } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import styled from "styled-components";
import Color from "../../constant/Color";
import useProfileContext from "../../hook/useProfileContext";

const List = () => {
  const { profiles, deleteProfile } = useProfileContext();

  if (!profiles || profiles.length === 0) {
    return <NoProfilesMessage>No profiles saved yet</NoProfilesMessage>;
  }

  return (
    <Container>
      {profiles.map((profile, index) => (
        <ProfileCard key={index}>
          <Avatar
            src={profile.profileData.avatar_url}
            alt={profile.profileData.login}
          />
          <Username
            href={profile.profileData.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            @{profile.profileData.login}
          </Username>
          <ActionIcons>
            <a
              href={profile.profileData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: Color.primaryText, fontSize: "1.5rem" }}
            >
              <IoEyeOutline color={Color.secondaryText} />
            </a>
            <IconButton
              onClick={() => deleteProfile(profile.profileData.login)}
            >
              <CiCircleRemove color={Color.secondaryText} />
            </IconButton>
          </ActionIcons>
        </ProfileCard>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
`;

const ProfileCard = styled.div`
  width: 175px;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;

  @media (max-width: 575px) {
    width: 40%;
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Username = styled.a`
  color: ${Color.tertiaryText};
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 575px) {
    font-size: 1rem;
  }
`;

const ActionIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 575px) {
    gap: 0.5rem;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${Color.primaryText};
  cursor: pointer;
  font-size: 1.5rem;
`;

const NoProfilesMessage = styled.div`
  margin-left: 2rem;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: ${Color.secondaryText};
`;

export default List;
