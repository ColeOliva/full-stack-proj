import { useState } from "react";
import { CiCircleCheck, CiCirclePlus } from "react-icons/ci";
import styled from "styled-components";
import Color from "../../constant/Color";
import useErrorContext from "../../hook/useErrorContext";
import useProfileContext from "../../hook/useProfileContext";

const Title = ({ information }) => {
  const [loading, setLoading] = useState(false);
  const { profiles, addProfile, deleteProfile } = useProfileContext();
  const { reportErrors } = useErrorContext();

  const isProfileSaved = profiles.some(
    (element) => element._id === information.login
  );

  const handleAddProfile = async () => {
    try {
      setLoading(true);
      await addProfile(information);
    } catch (error) {
      reportErrors("home", error.message);
    } finally {
      setLoading(false); // Ensure loading is stopped after adding
    }
  };

  const handleDeleteProfile = async () => {
    try {
      setLoading(true);
      await deleteProfile(information.login); // Pass the correct ID for deletion
    } catch (error) {
      reportErrors("home", error.message);
    } finally {
      setLoading(false); // Ensure loading is stopped after deleting
    }
  };

  return (
    <TitleContainer>
      <TextContent>
        <Name>{information.name ? information.name : information.login}</Name>
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
        {isProfileSaved ? (
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={handleDeleteProfile}
            disabled={loading}
          >
            <CiCircleCheck size={30} color={Color.primaryButton} />
          </button>
        ) : (
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={handleAddProfile}
            disabled={loading}
          >
            <CiCirclePlus size={30} color={"black"} />
          </button>
        )}
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
