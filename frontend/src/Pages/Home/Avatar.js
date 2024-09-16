import styled from 'styled-components';

const AvatarContainer = styled.div`
  margin: 2rem;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: gray;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 4rem;
    height: 4rem;
    margin: 0.5rem;
  }
`;

const Avatar = ({ information }) => {
  return (
    <AvatarContainer>
      <img
        src={information.avatar_url}
        alt="User Avatar"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </AvatarContainer>
  );
};

export default Avatar;
